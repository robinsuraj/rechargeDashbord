import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../@core/mock/authentication.service';
import { CommonHelperService } from '../../@core/mock/common-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  countryList;
  constructor(private fb:FormBuilder,
              private authenticationService:AuthenticationService,
              private commonHelper:CommonHelperService,
              private router:Router
    ) { 

      if(localStorage.getItem('userName')){
        this.router.navigate(['/dashboard'])
      }
    }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      mobileOperator:['',Validators.required],
      countryCode:['',Validators.required],
      mobileNumber:['',Validators.required],
      amount:['',Validators.required]
    })
    this.commonHelper.getCountry().subscribe(res=>{
      this.countryList=res;
      this.signUpForm.get('countryCode').patchValue(this.countryList[0].callingCodes[0])
    })
  }
  
  register(){
    if(this.signUpForm.valid){
      const registerRequest ={
        firstName: this.signUpForm.get('firstName').value,
        lastName: this.signUpForm.get('lastName').value,
        email: this.signUpForm.get('email').value,
        mobileOperator: this.signUpForm.get('mobileOperator').value,
        mobileNumber: this.signUpForm.get('mobileNumber').value,
        amount: this.signUpForm.get('amount').value,
      }
      this.commonHelper.showToast("success","Success","Registration Success") 
      this.router.navigate(['/pages/dashboard'])
      localStorage.setItem("userName",registerRequest.firstName)
      this.commonHelper.setUserStatus(registerRequest.firstName);
   
      // this.authenticationService.register(registerRequest).subscribe(response=>{
      //   this.commonHelper.showToast("success","Success","Registration Success") 
      //   this.router.navigate(['/pages/dashboard'])
      //   localStorage.setItem("userName",registerRequest.firstName)
      //   this.commonHelper.setUserStatus(registerRequest.firstName);
      // })
    }else{
      this.commonHelper.validateFormFields(this.signUpForm)
    }
  }

}

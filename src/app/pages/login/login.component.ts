import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonHelperService } from '../../@core/mock/common-helper.service';
import { AuthenticationService } from '../../@core/mock/authentication.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder,
              private authenticationService:AuthenticationService,
              private commonHelper:CommonHelperService,
              private router:Router
    ) { 
      if(localStorage.getItem('user')){
        this.router.navigate(['/dashboard'])
      }
    }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  
  login(){
    if(this.loginForm.valid){
      const loginRequest ={
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      }

      this.commonHelper.showToast("success","Success","") 
      this.router.navigate(['/pages/dashboard'])
      localStorage.setItem("userName",loginRequest.email)
      this.commonHelper.setUserStatus(loginRequest.password);
   
      // this.authenticationService.register(loginRequest).subscribe(response=>{
      //   this.commonHelper.showToast("success","Success","") 
      //   this.router.navigate(['/dashboard'])
      // })
    }else {
     this.commonHelper.validateFormFields(this.loginForm);
    }
  }

}

import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition, NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class CommonHelperService {

  constructor(private toastrService: NbToastrService, private http:HttpClient) { }
  config: ToasterConfig;
  destroyByClick = true;
  duration = 4000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = true;
  status: NbComponentStatus = 'primary';
  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];

  showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    this.toastrService.show(
      body,
      title,
      config);
  }
  

  // showErrorToast(errorTitle,message,time){
  //   this.toastr.error(errorTitle,message,{timeOut:time})
  // }
  
  // showSuccessToast(message,errorTitle,time){
  //   this.toastr.success(message,errorTitle,{timeOut:time})
  // }

  validateFormFields(formGroup: FormGroup) {  
      Object.keys(formGroup.controls).forEach(field => {  
        const control = formGroup.get(field)
        if (control instanceof FormControl) {            
          control.markAsDirty({ onlySelf: true }); 
          control.markAsTouched({ onlySelf: true }); 
          if(control.errors && control.errors.required){
            this.showToast("danger","Error","Provide valid values")      
          }
           } else if (control instanceof FormGroup) {        
          this.validateFormFields(control);          
        }
      }); 
  }

  getCountry(){
    return this.http.get("https://restcountries.eu/rest/v2/all");   
  }

private userStatus = new BehaviorSubject(localStorage.getItem('userName'));
getUserStatus = this.userStatus.asObservable();

setUserStatus(data){
  this.userStatus.next(data);
}

}

import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from '@nebular/theme';

@Component({
  selector: 'ngx-toastr',
  styleUrls: ['./toastr.component.scss'],
  templateUrl: './toastr.component.html',
})
export class ToastrComponent {
  constructor(private toastrService: NbToastrService) {}
  config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
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

  quotes = [
    { title: null, body: 'We rock at Angular' },
    { title: null, body: 'Titles are not always needed' },
    { title: null, body: 'Toastr rock!' },
  ];

 

  private showToast(type: NbComponentStatus, title: string, body: string) {
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
}

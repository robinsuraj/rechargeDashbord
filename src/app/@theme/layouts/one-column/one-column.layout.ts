import { Component } from '@angular/core';
import { CommonHelperService } from '../../../@core/mock/common-helper.service';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar *ngIf="showMenu" class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {
  constructor(private commonHelper:CommonHelperService){
    this.commonHelper.getUserStatus
    .subscribe((userName: string) => {
     if(userName){
       this.showMenu=true;
     }else{
       this.showMenu=false;
     }
    });
  }
   showMenu=false;
}

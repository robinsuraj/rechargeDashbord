import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from './forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ],
})
export class PagesModule {
}

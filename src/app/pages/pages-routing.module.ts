import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthGuardService } from '../@core/mock/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate : [AuthGuardService]
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}



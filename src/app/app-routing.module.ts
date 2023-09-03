import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { SettingComponent } from './setting/setting.component';
import {LoginGuardService} from './service/login-guard.service'
import { LoginComponent } from './login/login.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    // path: 'home', component: HomeComponent, canActivate: [LoginGuardService],
    path: 'home', component: HomeComponent,
    children: [
      { path: 'detail/:id', component: PatientDetailsComponent},
      { path: 'dashboard', component: PatientDashboardComponent},
      { path: 'register', component: PatientRegisterComponent},
      { path: 'setting', component: SettingComponent}
      
    ]
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

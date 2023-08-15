import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { SettingComponent } from './setting/setting.component';
import {LoginGuardService} from './service/login-guard.service'
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    // path: 'home', component: HomeComponent, canActivate: [LoginGuardService],
    path: 'home', component: HomeComponent,
    children: [
      { path: 'patient-detail', component: PatientDetailsComponent},
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

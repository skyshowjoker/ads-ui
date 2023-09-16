import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { DiagnosisResultComponent } from './diagnosis-result/diagnosis-result.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientUploadComponent } from './patient-upload/patient-upload.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UploadComponent } from './upload/upload.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoadingComponent } from './loading/loading.component';

import { NzMessageModule } from 'ng-zorro-antd/message';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PatientDetailsComponent,
    DiagnosisResultComponent,
    SettingComponent,
    LoginComponent,
    HomeComponent,
    PatientRegisterComponent,
    PatientDashboardComponent,
    PatientUploadComponent,
    AppHeaderComponent,
    UploadComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    RouterModule,
    AppRoutingModule,
    NzUploadModule,
    NzDescriptionsModule,
    NzFormModule,
    NzCardModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NzSpinModule,
    NzMessageModule
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    NzMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

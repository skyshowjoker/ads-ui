import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzDescriptionsSize } from 'ng-zorro-antd/descriptions';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from '../service/http-request.service';
import { Patient } from '../domain/patient';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit{
  constructor(
    private req: RequestService,  
    private http: HttpClient,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private message: NzMessageService) {}


    size: NzDescriptionsSize = 'default'
    patient: Patient | undefined
    patientId: number = 0
  ngOnInit(): void {
    this.patientId = this.getPatientId()
    this.getPatientDetail(this.patientId)
  }
  
  getPatientId(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  getPatientDetail(id: number){
    const url = `/patient/getDetailById?id=${id}`
    this.req.get(url).subscribe(response => {
      this.patient = response
      console.log(response)
      console.log(this.patient)
    })
  }
  getPatientPredict(){
    const url = `/patient/predict?patientId=${this.patientId}`;
    this.req.get(url).subscribe(response => {
      if(response.status = 204){
        this.message.create('error', `Predict fail, please upload a image file.`);
      }else{
        this.message.create('success', `Predict success`);
        this.getPatientDetail(this.patientId)
      }
      
    })
  }

  showPredictConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure predict this patient?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.getPatientPredict()
        console.log('OK')
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }



}

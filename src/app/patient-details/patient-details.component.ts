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
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit{
  constructor(
    private req: RequestService,  
    private http: HttpClient,
    private route: ActivatedRoute) {}


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
      this.getPatientDetail(this.patientId)
    })
  }





}

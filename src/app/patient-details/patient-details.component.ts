import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzDescriptionsSize } from 'ng-zorro-antd/descriptions';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from '../service/http-request.service';
import { Patient } from '../domain/patient';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit{


  patient: Patient | undefined
  constructor(
    private req: RequestService,  
    private http: HttpClient) {}
  ngOnInit(): void {
    this.req.get("/").subscribe(data => {
      this.patient = data
    })
  }
  size: NzDescriptionsSize = 'default';







}

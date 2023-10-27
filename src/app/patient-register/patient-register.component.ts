import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RequestService } from '../service/http-request.service';



@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder,
    private req: RequestService,  
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService) {}


  validateForm!: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    console.log(this.validateForm.value)
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const url = `/patient/save`;
      this.req.post(url, this.validateForm.value).subscribe(response => {
      console.log(response)
      this.message.create('success', `Register success`);
      this.router.navigate(['/home/detail/' + response]);
    })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }



  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [''],
      gender: ['' ],
      birthday: [''],
      caseId: ['' ],
      phone: ['' ],
      description: ['']
    });
  }
}

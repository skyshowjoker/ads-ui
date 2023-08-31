import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientUploadComponent } from './patient-upload.component';

describe('PatientUploadComponent', () => {
  let component: PatientUploadComponent;
  let fixture: ComponentFixture<PatientUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientUploadComponent]
    });
    fixture = TestBed.createComponent(PatientUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

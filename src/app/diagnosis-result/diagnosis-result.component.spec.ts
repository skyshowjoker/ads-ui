import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisResultComponent } from './diagnosis-result.component';

describe('DiagnosisResultComponent', () => {
  let component: DiagnosisResultComponent;
  let fixture: ComponentFixture<DiagnosisResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisResultComponent]
    });
    fixture = TestBed.createComponent(DiagnosisResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

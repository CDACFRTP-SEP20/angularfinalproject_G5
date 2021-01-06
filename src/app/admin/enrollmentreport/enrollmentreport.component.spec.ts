import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentreportComponent } from './enrollmentreport.component';

describe('EnrollmentreportComponent', () => {
  let component: EnrollmentreportComponent;
  let fixture: ComponentFixture<EnrollmentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

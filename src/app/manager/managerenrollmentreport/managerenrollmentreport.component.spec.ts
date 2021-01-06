import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerenrollmentreportComponent } from './managerenrollmentreport.component';

describe('ManagerenrollmentreportComponent', () => {
  let component: ManagerenrollmentreportComponent;
  let fixture: ComponentFixture<ManagerenrollmentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerenrollmentreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerenrollmentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

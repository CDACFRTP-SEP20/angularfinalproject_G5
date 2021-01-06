import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersportreportComponent } from './managersportreport.component';

describe('ManagersportreportComponent', () => {
  let component: ManagersportreportComponent;
  let fixture: ComponentFixture<ManagersportreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersportreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersportreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

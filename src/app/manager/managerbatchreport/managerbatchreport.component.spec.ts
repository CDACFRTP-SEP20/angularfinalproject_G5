import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerbatchreportComponent } from './managerbatchreport.component';

describe('ManagerbatchreportComponent', () => {
  let component: ManagerbatchreportComponent;
  let fixture: ComponentFixture<ManagerbatchreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerbatchreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerbatchreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

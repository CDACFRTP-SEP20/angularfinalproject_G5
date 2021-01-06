import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportreportComponent } from './sportreport.component';

describe('SportreportComponent', () => {
  let component: SportreportComponent;
  let fixture: ComponentFixture<SportreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

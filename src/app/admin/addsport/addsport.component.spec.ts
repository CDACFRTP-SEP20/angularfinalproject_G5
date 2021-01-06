import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsportComponent } from './addsport.component';

describe('AddsportComponent', () => {
  let component: AddsportComponent;
  let fixture: ComponentFixture<AddsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipdetailsComponent } from './membershipdetails.component';

describe('MembershipdetailsComponent', () => {
  let component: MembershipdetailsComponent;
  let fixture: ComponentFixture<MembershipdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

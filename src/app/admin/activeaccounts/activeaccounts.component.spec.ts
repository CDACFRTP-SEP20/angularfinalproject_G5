import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveaccountsComponent } from './activeaccounts.component';

describe('ActiveaccountsComponent', () => {
  let component: ActiveaccountsComponent;
  let fixture: ComponentFixture<ActiveaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

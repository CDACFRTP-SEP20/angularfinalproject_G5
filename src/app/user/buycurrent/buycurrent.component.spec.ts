import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycurrentComponent } from './buycurrent.component';

describe('BuycurrentComponent', () => {
  let component: BuycurrentComponent;
  let fixture: ComponentFixture<BuycurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuycurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

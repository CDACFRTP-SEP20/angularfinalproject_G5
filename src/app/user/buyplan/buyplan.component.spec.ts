import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyplanComponent } from './buyplan.component';

describe('BuyplanComponent', () => {
  let component: BuyplanComponent;
  let fixture: ComponentFixture<BuyplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

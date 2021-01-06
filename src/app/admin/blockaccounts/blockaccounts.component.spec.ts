import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockaccountsComponent } from './blockaccounts.component';

describe('BlockaccountsComponent', () => {
  let component: BlockaccountsComponent;
  let fixture: ComponentFixture<BlockaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

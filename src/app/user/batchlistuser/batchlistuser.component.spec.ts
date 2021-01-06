import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchlistuserComponent } from './batchlistuser.component';

describe('BatchlistuserComponent', () => {
  let component: BatchlistuserComponent;
  let fixture: ComponentFixture<BatchlistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchlistuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchlistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

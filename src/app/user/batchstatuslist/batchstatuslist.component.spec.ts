import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchstatuslistComponent } from './batchstatuslist.component';

describe('BatchstatuslistComponent', () => {
  let component: BatchstatuslistComponent;
  let fixture: ComponentFixture<BatchstatuslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchstatuslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchstatuslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DschomeComponent } from './dschome.component';

describe('DschomeComponent', () => {
  let component: DschomeComponent;
  let fixture: ComponentFixture<DschomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DschomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DschomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

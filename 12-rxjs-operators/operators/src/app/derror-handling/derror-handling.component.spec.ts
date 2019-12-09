import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DErrorHandlingComponent } from './derror-handling.component';

describe('DErrorHandlingComponent', () => {
  let component: DErrorHandlingComponent;
  let fixture: ComponentFixture<DErrorHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DErrorHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

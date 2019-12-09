import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptandoComponent } from './interceptando.component';

describe('InterceptandoComponent', () => {
  let component: InterceptandoComponent;
  let fixture: ComponentFixture<InterceptandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

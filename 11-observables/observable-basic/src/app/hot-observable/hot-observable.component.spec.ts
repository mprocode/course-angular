import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObservableComponent } from './hot-observable.component';

describe('HotObservableComponent', () => {
  let component: HotObservableComponent;
  let fixture: ComponentFixture<HotObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

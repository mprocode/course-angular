import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObservableZeroComponent } from './hot-observable-zero.component';

describe('HotObservableZeroComponent', () => {
  let component: HotObservableZeroComponent;
  let fixture: ComponentFixture<HotObservableZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotObservableZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotObservableZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

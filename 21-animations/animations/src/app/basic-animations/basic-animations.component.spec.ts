import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAnimationsComponent } from './basic-animations.component';

describe('BasicAnimationsComponent', () => {
  let component: BasicAnimationsComponent;
  let fixture: ComponentFixture<BasicAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

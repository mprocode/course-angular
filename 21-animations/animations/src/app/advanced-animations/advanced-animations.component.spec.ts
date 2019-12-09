import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedAnimationsComponent } from './advanced-animations.component';

describe('AdvancedAnimationsComponent', () => {
  let component: AdvancedAnimationsComponent;
  let fixture: ComponentFixture<AdvancedAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

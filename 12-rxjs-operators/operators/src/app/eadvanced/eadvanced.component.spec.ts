import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAdvancedComponent } from './eadvanced.component';

describe('EAdvancedComponent', () => {
  let component: EAdvancedComponent;
  let fixture: ComponentFixture<EAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

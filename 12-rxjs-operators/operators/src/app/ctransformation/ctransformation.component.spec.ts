import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTransformationComponent } from './ctransformation.component';

describe('CTransformationComponent', () => {
  let component: CTransformationComponent;
  let fixture: ComponentFixture<CTransformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTransformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

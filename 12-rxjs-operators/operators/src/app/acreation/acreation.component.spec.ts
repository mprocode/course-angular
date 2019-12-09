import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACreationComponent } from './acreation.component';

describe('ACreationComponent', () => {
  let component: ACreationComponent;
  let fixture: ComponentFixture<ACreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

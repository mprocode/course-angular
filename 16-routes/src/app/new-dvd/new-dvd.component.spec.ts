import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDvdComponent } from './new-dvd.component';

describe('NewDvdComponent', () => {
  let component: NewDvdComponent;
  let fixture: ComponentFixture<NewDvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterListaComponent } from './emitter-lista.component';

describe('EmitterListaComponent', () => {
  let component: EmitterListaComponent;
  let fixture: ComponentFixture<EmitterListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitterListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitterListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

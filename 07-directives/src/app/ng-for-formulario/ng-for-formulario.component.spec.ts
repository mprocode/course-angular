import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForFormularioComponent } from './ng-for-formulario.component';

describe('NgForFormularioComponent', () => {
  let component: NgForFormularioComponent;
  let fixture: ComponentFixture<NgForFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeComponent } from './nome.component';

describe('NomeComponent', () => {
  let component: NomeComponent;
  let fixture: ComponentFixture<NomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

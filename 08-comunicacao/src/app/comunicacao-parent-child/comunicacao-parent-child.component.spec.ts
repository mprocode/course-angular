import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoParentChildComponent } from './comunicacao-parent-child.component';

describe('ComunicacaoParentChildComponent', () => {
  let component: ComunicacaoParentChildComponent;
  let fixture: ComponentFixture<ComunicacaoParentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacaoParentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacaoParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

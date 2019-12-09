import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdsPerDepComponent } from './prods-per-dep.component';

describe('ProdsPerDepComponent', () => {
  let component: ProdsPerDepComponent;
  let fixture: ComponentFixture<ProdsPerDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdsPerDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdsPerDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

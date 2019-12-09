import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeChangesComponent } from './nome-changes.component';

describe('NomeChangesComponent', () => {
  let component: NomeChangesComponent;
  let fixture: ComponentFixture<NomeChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomeChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomeChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

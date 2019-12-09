import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';
import { DepartmentAll } from '../store/department.actions';
import * as fromDepartmentSelectors from '../store/department.selectors';

@Component({
  selector: 'app-prods-per-dep',
  templateUrl: './prods-per-dep.component.html',
  styleUrls: ['./prods-per-dep.component.css']
})
export class ProdsPerDepComponent implements OnInit {

  private departments$ : Observable<Department[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new DepartmentAll());
    this.departments$ = this.store.select(fromDepartmentSelectors.selectAll);
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';
import { Department } from '../../models/department.model';
import { DepartmentAll, DepartmentUpdate, DepartmentNew, DepartmentDelete } from '../../store/department.actions';
import * as departmentSelectors from '../../store/department.selectors';

@Component({
  selector: 'app-main-departments',
  templateUrl: './main-departments.component.html',
  styleUrls: ['./main-departments.component.css']
})
export class MainDepartmentsComponent implements OnInit {
  
  private department: Department = null;
  private departments$: Observable<Department[]>;
  private loading$ : Observable<boolean>;
  private total$ : Observable<number>

  constructor(
    private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new DepartmentAll());
    this.departments$ = this.store.select(departmentSelectors.selectAll);
    this.loading$ = this.store.select(departmentSelectors.selectLoading)  
    this.total$ = this.store.select(departmentSelectors.selectTotal);
  }

  onSave(department: Department){
    if (department._id && department._id!="")
      this.store.dispatch(new DepartmentUpdate({department}));
    else
      this.store.dispatch(new DepartmentNew({department}));
    this.department = null;
  }

  onCancel() {
    this.department = null;
  }

  getDepartmentBlank() {
    return  { name:'', _id: null };
  }

  onEdit(event) {
    this.department = event;
  }

  onDelete(d: Department) {
    this.store.dispatch(new DepartmentDelete({id: d._id}));
  }

  addNew(){
    this.department = this.getDepartmentBlank();
  }
}

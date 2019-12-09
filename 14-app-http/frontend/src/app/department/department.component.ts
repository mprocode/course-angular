import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  private departments: Department[];
  private depName: string = '';
  private dep: Department = null;
  private unsubscribe$: Subject<any> = new Subject();

  // Adicionar por ultimo o snackBar
  constructor(
    public departmentService: DepartmentService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.departmentService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(deps => this.departments = deps);
  }

  save() {
    if (this.dep) {
      this.dep.name = this.depName;
      this.departmentService.update(this.dep)
        .subscribe(
          (dep) => {
            this.dep = null;
            this.notify("Updated!");
          },
          (err) => console.log(err))
    }
    else {
      this.departmentService.add({name: this.depName})
      .subscribe(
        ()    => this.notify("Inserted!"),
        (err) => this.notify(err.error.msg)
      );

    }
    this.clearFields();
  }

  edit(dep: Department) {
    this.dep = dep;
    this.depName = dep.name;
  }

  delete(dep: Department) {
    this.departmentService.del(dep)
      .subscribe(
        ()    => this.notify("Removed!"),
        (err) => this.notify(err.error.msg)
      );
  }

  cancel() {
    this.clearFields();
    this.dep = null;
  }

  clearFields() {
    this.depName = '';
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  notify(msg: string) {
    this.snackBar.open(msg, "OK", {duration: 3000});
  }

}

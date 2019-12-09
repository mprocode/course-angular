import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

  @Input() departments: Department[];
  @Output() onDelete: EventEmitter<Department> = new EventEmitter<Department>();
  @Output() onEdit: EventEmitter<Department> = new EventEmitter<Department>();

  constructor() { }

  ngOnInit() {
  }

  edit(d: Department) {
    this.onDelete.emit(d);
  }

  del(d: Department) {
    this.onEdit.emit(d);
  }

}

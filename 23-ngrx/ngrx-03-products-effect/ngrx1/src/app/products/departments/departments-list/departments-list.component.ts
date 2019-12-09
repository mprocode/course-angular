import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

  @Input() departments: Department[];
  constructor() { }

  ngOnInit() {
  }

  edit(d: Department) {}

  del(d: Department) {}
}

import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../department.service';
import { Department } from '../../models/department';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  
  private depName: string = '';

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
  }

  save() {
    this.departmentService.add(
      new Department(null, this.depName)); // i)
  }

  clear() {
    this.depName = '';
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Department } from 'src/app/products/models/department.model';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  @Input() department: Department;
  @Output() onSave: EventEmitter<Department> = new EventEmitter<Department>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  departmentForm = this.fb.group({
    name: ['',  Validators.required],
    _id: ['']
  });

  constructor(private fb: FormBuilder) { }

  
  cancel() {
    this.onCancel.emit();
  }

  onSubmit() {
    console.log(this.departmentForm.value);
    this.onSave.emit(this.departmentForm.value)
  }

  ngOnInit() {
    this.departmentForm.setValue(this.department);
  }
}

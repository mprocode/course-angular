import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  
  private depName: string = '';

  constructor() { }

  ngOnInit() {
  }

  save() {
  }

  clear() {
    this.depName = '';
  }
}

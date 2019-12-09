import { Injectable } from '@angular/core';

import {Department} from './models/department';

@Injectable()   // k)
export class DepartmentService {

  private dataFromServer: {id: number, name: string}[] = [
    {id: 1, name: "Clothing"},
    {id: 2, name: "Books"},
    {id: 3, name: "Electronics"},
    {id: 4, name: "Computers"},
  ];
  private departments: Department[] = [];
  private nextId: number;

  constructor() {
    for(let d of this.dataFromServer) {
      this.departments.push(new Department(d.id, d.name));
      this.nextId = d.id + 1;
    }
  }

  getDepartments(): Department[] {
    return this.departments;
  }

  add(dep: Department) {
    dep.id = this.nextId++;
    this.departments.push(dep);
  }

  getDepartmentById(id: number): Department {
    return this.departments.find((d) => d.id == id);
  }
}

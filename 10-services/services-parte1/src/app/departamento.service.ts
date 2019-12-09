import { Injectable } from '@angular/core';

import {Department} from './models/department';

// @Injectable()
export class DepartamentoService {

  private departments: Department[] = [];

  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }

  add(dep: Department) {
    this.departments.push(dep);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product';
import { Department } from '../../models/department';

import { LogService } from '../../log.service';

import { DepartmentService } from '../../department.service';  // i)
import { ProductService } from '../../product.service'; // i)


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],

  providers: [ LogService ]    // 2o este
})
export class ProductFormComponent implements OnInit {

  @Output() newProduct: EventEmitter<any> = new EventEmitter<any>();

  private name: string;
  private department: Department;
  private price: number;
  private description: string;

  private departments: Department[]; // i)

  constructor(
    private l: LogService,
    private departmentService: DepartmentService, // i)
    private productService: ProductService // j)
  ) {}

  ngOnInit() {
    this.departments = this.departmentService.getDepartments(); // i)
  }

  save() {
    console.log(
      'name: ' + this.name + ', ' +
      'dep: ' + this.department + ', ' +
      'price: ' + this.price + ', ' +
      'desc: ' + this.description
    );

    this.l.warn('New product');

    this.productService.add( 
      new Product(null, this.name, this.department, this.price, this.description)
    ); // j)

    this.newProduct.emit('New product: ' + this.name);

  }

  clear() {
    this.name = '';
    this.department = null;
    this.price = null;
    this.description = '';
  }

}

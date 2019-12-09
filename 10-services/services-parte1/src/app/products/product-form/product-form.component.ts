import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product';
import { Department } from '../../models/department';

import { LogService } from '../../log.service';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],

  providers: [ LogService ]    // 2o este
})
export class ProductFormComponent implements OnInit {

  @Output() newProduct: EventEmitter<any> = new EventEmitter<any>();

  private name: string;
  private department: number;
  private price: number;
  private description: string;

  private departments: Department[] = [
    new Department(1, "Clothing"),
    new Department(2, "Books"),
    new Department(3, "Electronics"),
    new Department(4, "Computers")
  ];

  // private l: LogService; // 1o este

  constructor(private l: LogService) {   // 2o este
    // this.l = new LogService(); // 1o este
  }

  ngOnInit() {
  }

  save() {
    console.log(
      'name: ' + this.name + ', ' +
      'dep: ' + this.department + ', ' +
      'price: ' + this.price + ', ' +
      'desc: ' + this.description
    );

    this.l.warn('New product');
    this.newProduct.emit('New product: ' + this.name);

  }

  clear() {
    this.name = '';
    this.department = null;
    this.price = null;
    this.description = '';
  }

}

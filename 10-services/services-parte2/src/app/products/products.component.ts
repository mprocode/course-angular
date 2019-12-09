import { Component, OnInit, ViewChild } from '@angular/core';
import { LogService } from '../log.service';

import { Product } from '../models/product';
import { Department } from '../models/department';
import { ProductService } from '../product.service';


import {MatTable} from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

  providers: [ LogService ]    // 2o este
})
export class ProductsComponent implements OnInit {
  
  @ViewChild(MatTable)
  private datatable: MatTable<any>;

  tableColumns: string[] = ['name', 'department', 'price', 'desc'];

  data: Product[];
/*
  data: Product[] = [
    new Product(1, 'Product 1', new Department(1, 'Dep 1'), 12.00, "Prod1 description"),
    new Product(2, 'Product 2', new Department(1, 'Dep 1'), 22.00, "Prod2 description"),
    new Product(3, 'Product 3', new Department(2, 'Dep 2'), 32.00, "Prod3 description"),
    new Product(4, 'Product 4', new Department(2, 'Dep 2'), 42.00, "Prod4 description"),
  ];   */  //j)

  constructor(
    private l: LogService,
    private productService: ProductService   // j
  ) { }

  ngOnInit() {
    this.data = this.productService.getProducts();
    console.log(this.data);
    this.productService.newProduct.subscribe(() => this.datatable.renderRows());
  }

  newProductEvent(event) {
    this.l.log('from ProductsComponent: ' + event);
    console.log(this.data );
    //this.datatable.renderRows();
  }

}

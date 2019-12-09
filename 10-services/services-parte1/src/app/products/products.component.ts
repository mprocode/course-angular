import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

import { Product } from '../models/product';
import { Department } from '../models/department';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

  providers: [ LogService ]    // 2o este
})
export class ProductsComponent implements OnInit {
  
  tableColumns: string[] = ['name', 'department', 'price', 'desc'];

  data: Product[] = [
    new Product('Product 1', new Department(1, 'Dep 1'), 12.00, "Prod1 description"),
    new Product('Product 2', new Department(1, 'Dep 1'), 22.00, "Prod2 description"),
    new Product('Product 3', new Department(2, 'Dep 2'), 32.00, "Prod3 description"),
    new Product('Product 4', new Department(2, 'Dep 2'), 42.00, "Prod4 description"),
  ];

  constructor(private l: LogService) { }

  ngOnInit() {
  }

  newProductEvent(event) {
    this.l.log('from ProductsComponent: ' + event);
  }

}

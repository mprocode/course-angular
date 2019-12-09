import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[];
  @Output() onEdit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() onDelete: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  edit(p: Product) {
    this.onEdit.emit(p);
  }

  del(p: Product) {
    this.onDelete.emit(p);
  }
}

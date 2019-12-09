import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild('name') productName: ElementRef;

  productForm  = this.fb.group({
    id: [undefined],
    name: ['', Validators.required],
    stock: [0, Validators.required],
    price: [0, Validators.required],
  });  

  products$: Observable<Product[]>;
  searchProducts$: Observable<Product[]>;

  displayedColumns = ['name', 'price', 'stock', 'operations'];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
    this.products$.subscribe((data)=>console.log(data));
  }

  onSubmit() {
    let p: Product = this.productForm.value;
    if (!p.id) {
      this.addProduct(p);
    }
    else {
      this.updateProduct(p);
    }
  }

  updateProduct(p: Product) {
    this.productsService.updateProduct(p)
    .then(()=> {
      this.snackBar.open("Product updated!", "OK", {duration: 2000});
      this.productForm.reset({name: '', stock: 0, price: 0});
      this.productName.nativeElement.focus();
    })
    .catch(()=> {
      this.snackBar.open("Error updating the product.", "OK", {duration: 2000});
    })
  }

  addProduct(p: Product) {
    this.productsService.addProduct(p)
    .then(()=> {
      this.snackBar.open("Product added.", "OK", {duration: 2000});
      this.productForm.reset({name: '', stock: 0, price: 0});
      this.productName.nativeElement.focus();
    })
    .catch(()=> {
      this.snackBar.open("Error on submiting the product.", "OK", {duration: 2000});
    })
  }

  edit(p) {
    this.productForm.setValue(p);
  }

  delete(p) {
    this.productsService.deleteProduct(p)
    .then(()=> {
      this.snackBar.open("Product has been removed.", "OK", {duration: 2000});
    })
    .catch(()=> {
      this.snackBar.open("Error when trying to remove the product.", "OK", {duration: 2000});
    })
  }

  search(event) {
    this.searchProducts$ = this.productsService.findName(event.target.value);
  }

}

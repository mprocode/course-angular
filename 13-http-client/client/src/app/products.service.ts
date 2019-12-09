import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }
/*
  getProducts(): Observable<any> {
    return this.http.get("http://localhost:3000/products");
  }
*/  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  getProductsError(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/productserr");
  }

  getProductsDelay(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/productsdelay");
  }

  getProductsIDs(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:3000/products_ids");
  }
  
  getProductName(id: string): Observable<string> {
    return this.http.get(
      "http://localhost:3000/products/name/" + id,
      {responseType: "text"});
  }

  saveProduct(p: Product) {
    return this.http.post("http://localhost:3000/products", p);
  }

  deleteProduct(p: Product) {
    return this.http.delete("http://localhost:3000/products/" + p._id);
  }  

  editProduct(p: Product): Observable<Product> {
    return this.http.patch<Product>("http://localhost:3000/products/" + p._id, p);
  }

}

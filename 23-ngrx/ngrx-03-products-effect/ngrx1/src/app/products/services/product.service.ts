import { Injectable } from '@angular/core';
//import { ProductsModule } from '../products.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'  // Trocar
})
export class ProductService {

  readonly url = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  all(): Observable<Product[]> {
    this.http.get(`${this.url}`).subscribe(p=>console.log(p));
    return this.http.get<Product[]>(`${this.url}`).pipe(tap(p=>console.log(p)));
  }

  remove(id: string): Observable<string> {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(map(()=>id));
  }

  add(p: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}`, p);
  }

  update(p: Product) : Observable<Product> {
    return this.http.patch<Product>(`${this.url}/${p._id}`, p);
  }

}

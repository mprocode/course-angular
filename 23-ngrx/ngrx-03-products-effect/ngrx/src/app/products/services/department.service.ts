import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root' //ProductsModule   // << trocar
})
export class DepartmentService {
  
  readonly url = "http://localhost:3000/departments";

  constructor(private http: HttpClient) { }

  all(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.url}`);
  }

  remove(id: string):Observable<string> {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(map(()=>id));
  }

  add(d: Department): Observable<Department> {
    return this.http.post<Department>(`${this.url}`, d);
  }

  update(d: Department) : Observable<Department> {
    return this.http.patch<Department>(`${this.url}/${d._id}`, d);
  }

  products(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products/${id}`);
  }
}

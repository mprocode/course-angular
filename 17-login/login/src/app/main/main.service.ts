import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Person} from './person';
import {catchError, tap} from 'rxjs/operators';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    console.log('getPeople()');
    return this.http
      .get<Person[]>('http://localhost:9000/api/people')
      .pipe(
        tap(p => console.log(p)),
        catchError((e) => {
          console.log(e);
          return throwError(e);
        }));
  }

  getProducts(): Observable<Product[]> {
    console.log('getProducts()');
    return this.http
      .get<Product[]>('http://localhost:9000/api/products')
      .pipe(
        tap(p => console.log(p)),
        catchError((e) => {
          console.log(e);
          return throwError(e);
        }));
  }

}

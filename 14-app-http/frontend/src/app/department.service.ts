import { Injectable } from '@angular/core';
import { Department } from './department';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {tap, takeUntil, first, delay} from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class DepartmentService {

  private departmentsSubject$ : BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>(null);
  readonly url = 'http://localhost:3000/departments';
  private loaded : boolean = false;

  constructor(private http: HttpClient) { }

  get(): Observable<Department[]> {
    if (!this.loaded) {
      this.http.get<Department[]>(this.url)
        .pipe(
          tap(d=>console.log(d)), 
          // delay(1000)
        )
        .subscribe(this.departmentsSubject$);
      this.loaded = true;
    }  
    return this.departmentsSubject$.asObservable();
  }

  add(dep: Department): Observable<Department> {
    return this.http.post<Department>(this.url, dep)
      .pipe(
        tap((dep: Department) => this.departmentsSubject$.getValue().push(dep),
      ));
  }

  del(dep: Department): Observable<any> {
    return this.http.delete(`${this.url}/${dep._id}`)
      .pipe(
        tap(() => {
          let departments = this.departmentsSubject$.getValue();
          let i = departments.findIndex(d => d._id===dep._id);
          if (i>=0)
            departments.splice(i, 1);
        }),
      )
  }  

  update(dep: Department): Observable<Department> {
    return this.http.patch<Department>(`${this.url}/${dep._id}`, dep)
      .pipe(
        tap((d: Department) => {
          let i = this.departmentsSubject$.getValue()
                    .findIndex(d => d._id===dep._id);
          if (i>=0) 
            this.departmentsSubject$.getValue()[i].name = d.name;
        }),
      )
  }

}

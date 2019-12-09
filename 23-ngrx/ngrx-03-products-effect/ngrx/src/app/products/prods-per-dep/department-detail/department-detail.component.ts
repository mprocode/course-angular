import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { DepartmentProducts } from '../../store/department.actions';
import { Subject, Observable } from 'rxjs';
import * as fromDeparmentSelectors from '../../store/department.selectors';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.products$ = this.activatedRoute.paramMap
      .pipe(
        tap((params: ParamMap) => this.store.dispatch(new DepartmentProducts({id: params.get('id')}))),
        switchMap((params: ParamMap) => 
          this.store.select(fromDeparmentSelectors.selectProdsByDep( params.get('id') ))
        )
      );
  }


}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Observable, combineLatest } from 'rxjs';
import { Product } from '../../models/product.model';
import * as fromProductSelectors from '../../store/product.selectors';
import { ProductAll, ProductDelete, ProductUpdate, ProductNew } from '../../store/product.actions';
import { DepartmentAll } from '../../store/department.actions';
import * as fromDeparmentSelectors from '../../store/department.selectors';
import { tap, map, filter } from 'rxjs/operators';
import { Department } from '../../models/department.model';


@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.css']
})
export class MainProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  departments$: Observable<Department[]>;

  loadingAll$: Observable<boolean>;
  productsLoading$: Observable<boolean>;
  product: Product = null;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // Mostrar esses testes primeiros:
    /*
    this.store.dispatch(new ProductAll());
    this.store.select(fromProductSelectors.selectAll)
      .subscribe((products) => console.log(products));

    this.store.dispatch(new DepartmentAll());

    combineLatest(
      this.store.select(fromProductSelectors.selectAll),
      this.store.select(fromDeparmentSelectors.selectAll))
    .pipe (
      tap(([products,departments])=>{console.log(products, departments)})
    ).subscribe();
    */
    this.store.dispatch(new ProductAll());
    this.store.dispatch(new DepartmentAll());
    this.departments$ = this.store.select(fromDeparmentSelectors.selectAll);
    this.products$ = combineLatest(
      this.store.select(fromProductSelectors.selectAll),
      this.store.select(fromDeparmentSelectors.selectAll))
    .pipe (
      filter(([products,departments])=> departments.length>0),
      map(([products,departments])=>{
        for(let p of products) {
          let ids = (p.departments as string[]);
          p.departments = ids.map((id)=>departments.find(dep=>dep._id==id));
        }
        return products;
      })
    )

    this.products$.subscribe(prods=>console.log(prods));

    this.loadingAll$ = combineLatest(
      this.store.select(fromProductSelectors.selectLoading),
      this.store.select(fromDeparmentSelectors.selectLoading),
    ).pipe(map(([p,d])=>p||d));

    this.productsLoading$ = this.store.select(fromProductSelectors.selectLoading);
  }

  onSave(product: Product){
    product.departments = (product.departments as Department[]).map(d=>d._id);
    if (product._id && product._id!="")
      this.store.dispatch(new ProductUpdate({product}));
    else
      this.store.dispatch(new ProductNew({product}));
    this.product = null;
  }

  onCancel() {
    this.product = null;
  }

  getProductBlank() {
    return  { departments:[], name:'', price:0, stock:0, _id: null };
  }

  onEdit(event) {
    this.product = { 
      departments: event.departments, 
      name: event.name, price: event.price, 
      stock: event.stock, _id: event._id };
  }

  onDelete(p: Product) {
    console.log(p);
    this.store.dispatch(new ProductDelete({id: p._id}));
  }

  addNew(){
    this.product = this.getProductBlank();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { DepartmentFormComponent } from './departments/department-form/department-form.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';

import { StoreModule } from '@ngrx/store';

import * as fromProductsReducers from './store/product.reducers';
import * as fromDepartmentsReducers from './store/department.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { DepartmentEffects } from './store/department.effects';
import { ProductsRoutingModule } from './products-routing.module';
import { MainProductsComponent } from './products/main-products/main-products.component';
import { MainDepartmentsComponent } from './departments/main-departments/main-departments.component';
import { ProdsPerDepComponent } from './prods-per-dep/prods-per-dep.component';
import { DepartmentDetailComponent } from './prods-per-dep/department-detail/department-detail.component';

@NgModule({
  declarations: [
    ProductsListComponent, 
    ProductFormComponent, 
    DepartmentFormComponent, 
    DepartmentsListComponent, 
    MainProductsComponent, 
    MainDepartmentsComponent, ProdsPerDepComponent, DepartmentDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', fromProductsReducers.reducer),
    StoreModule.forFeature('departments', fromDepartmentsReducers.reducer),
    EffectsModule.forFeature([ProductEffects, DepartmentEffects]),
  ]
})
export class ProductsModule { }

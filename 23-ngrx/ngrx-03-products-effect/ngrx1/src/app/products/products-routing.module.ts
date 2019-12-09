import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainProductsComponent } from './products/main-products/main-products.component';
import { MainDepartmentsComponent } from './departments/main-departments/main-departments.component';

const routes: Routes = [
  {path: 'products', component: MainProductsComponent},
  {path: 'departments', component: MainDepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

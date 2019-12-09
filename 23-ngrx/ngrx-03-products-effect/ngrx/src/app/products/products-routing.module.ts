import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainProductsComponent } from './products/main-products/main-products.component';
import { MainDepartmentsComponent } from './departments/main-departments/main-departments.component';
import { ProdsPerDepComponent } from './prods-per-dep/prods-per-dep.component';
import { DepartmentDetailComponent } from './prods-per-dep/department-detail/department-detail.component';

const routes: Routes = [
  {path: 'products', component: MainProductsComponent},
  {path: 'departments', component: MainDepartmentsComponent},
  {path: 'perdepartments', component: ProdsPerDepComponent,
   children: [
     {path: ":id", component: DepartmentDetailComponent}
   ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

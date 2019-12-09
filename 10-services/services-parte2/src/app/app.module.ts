import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import {MatSelectModule} from '@angular/material/select';

import {MatButtonModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatCardModule,
        } from '@angular/material';
import { DepartmentFormComponent } from './products/department-form/department-form.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

import { DepartmentService } from './department.service';  // i)
import { ProductService } from './product.service'; // j)

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFormComponent,
    DepartmentFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatTabsModule,
  ],
  providers: [
    DepartmentService, // i)
    ProductService, // j)

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

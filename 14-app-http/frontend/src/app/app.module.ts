import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FlexLayoutModule } from "@angular/flex-layout"; 

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ProductComponent } from './product/product.component';
import { DepartmentService } from './department.service';
import { ProductService } from './product.service';

import { HttpClientModule } from '@angular/common/http';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ProductComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatChipsModule,
    MatSnackBarModule,
    FlexLayoutModule
    
  ],
  providers: [
    DepartmentService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

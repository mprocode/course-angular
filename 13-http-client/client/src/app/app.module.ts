import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogEditProductComponent } from './dialog-edit-product/dialog-edit-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DialogEditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    ProductsService
  ],
  entryComponents: [
    DialogEditProductComponent
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }

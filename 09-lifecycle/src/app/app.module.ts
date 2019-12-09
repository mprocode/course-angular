import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { 
  MatCardModule, 
  MatListModule, 
  MatButtonModule, 
  MatIconModule, 
  MatSelectModule, 
  MatChipsModule,
  MatSlideToggleModule,
  MatDividerModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';


import { MainLifecycleComponent } from './main-lifecycle/main-lifecycle.component';
import { LifecycleChildComponent } from './main-lifecycle/lifecycle-child/lifecycle-child.component';
import { ChildChildComponent } from './main-lifecycle/lifecycle-child/child-child/child-child.component';
import { CheckComponent } from './check/check.component';
import { CheckChildComponent } from './check/check-child/check-child.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLifecycleComponent,
    LifecycleChildComponent,
    ChildChildComponent,
    CheckComponent,
    CheckChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatChipsModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatDividerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

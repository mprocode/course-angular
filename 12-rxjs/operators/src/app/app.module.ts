import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BasicCreationComponent } from './basic-creation/basic-creation.component';
import { FormsModule } from '@angular/forms';
import { OperatorsComponent } from './operators/operators.component';
import { AsyncComponent } from './async/async.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { UnsubscribingComponent } from './unsubscribing/unsubscribing.component';
import { SwitchMergeComponent } from './switch-merge/switch-merge.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BasicCreationComponent,
    OperatorsComponent,
    AsyncComponent,
    DragAndDropComponent,
    ErrorHandlingComponent,
    UnsubscribingComponent,
    SwitchMergeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

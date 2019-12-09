import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { BFilteringComponent } from './bfiltering/bfiltering.component';
import { ACreationComponent } from './acreation/acreation.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { CTransformationComponent } from './ctransformation/ctransformation.component';
import { DErrorHandlingComponent } from './derror-handling/derror-handling.component';
import { EAdvancedComponent } from './eadvanced/eadvanced.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    BFilteringComponent,
    ACreationComponent,
    DragAndDropComponent,
    CTransformationComponent,
    DErrorHandlingComponent,
    EAdvancedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

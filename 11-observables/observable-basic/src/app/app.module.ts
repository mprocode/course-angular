import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { ColdObservableComponent } from './cold-observable/cold-observable.component';
import { HotObservableComponent } from './hot-observable/hot-observable.component';
import { HotObservableZeroComponent } from './hot-observable-zero/hot-observable-zero.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectChildComponent } from './subjects/subject-child/subject-child.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ColdObservableComponent,
    HotObservableComponent,
    HotObservableZeroComponent,
    SubjectsComponent,
    SubjectChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

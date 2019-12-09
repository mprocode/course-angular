import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BluefyDirective } from './bluefy.directive';
import { DuplicateDirective } from './duplicate.directive';
import { CloneDirective } from './clone.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveComponent,
    BluefyDirective,
    DuplicateDirective,
    CloneDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

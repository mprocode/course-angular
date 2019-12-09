import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicAnimationsComponent } from './basic-animations/basic-animations.component';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdvancedAnimationsComponent, ImageDirective } from './advanced-animations/advanced-animations.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicAnimationsComponent,
    AdvancedAnimationsComponent,
    ImageDirective

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

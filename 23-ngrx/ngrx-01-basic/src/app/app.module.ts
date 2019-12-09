import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/person.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,

    // The StoreModule.forRoot() method registers the global 
    // providers needed to access the Store throughout your application.
    //StoreModule.forRoot({ people: reducer }),

    StoreModule.forRoot( appReducers ),

    StoreDevtoolsModule.instrument ({
      maxAge: 25, // Store the last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

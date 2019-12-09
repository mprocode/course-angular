import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DvdComponent } from './dvd/dvd.component';
import { BookComponent } from './book/book.component';
import { NewDvdComponent } from './new-dvd/new-dvd.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './book/book-authors/book-authors.component';
import { BlankComponent } from './book/blank/blank.component';
import { ElectronicsModule } from './electronics/electronics.module';


/*
const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent},
  { path: 'books', component: BookComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dvds'},
  { path: '**', component: PageNotFoundComponent},
];
*/
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DvdComponent,
    BookComponent,
    NewDvdComponent,
    DvdDetailComponent,
    BookDetailComponent,
    BookAuthorsComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    // RouterModule.forRoot(appRoutes),

    // ElectronicsModule,

    RoutingModule,
    // ElectronicsModule, // Lembrar de colocar acima
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes }  from '@angular/router';
import { DvdComponent } from './dvd/dvd.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewDvdComponent } from './new-dvd/new-dvd.component';
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './book/book-authors/book-authors.component';
import { BlankComponent } from './book/blank/blank.component';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent},
  { path: 'dvds/new', component: NewDvdComponent},
  { path: 'dvds/:index', component: DvdDetailComponent },

  // { path: 'books', component: BookComponent},
  { path: 'books', 
    component: BookComponent, 
    children: [
      // { path: ":index", component: BookDetailComponent },
      { 
        path: ":index", 
        component: BookDetailComponent, 
        children: [
          { path: "authors", component: BookAuthorsComponent },
          { path: "", component:  BlankComponent},
        ] 
      },
      
      { path: "", component:  BlankComponent}]},

  {
    path: 'electronics',
    loadChildren: './electronics/electronics.module#ElectronicsModule',
  },      


  { path: '', pathMatch: 'full', redirectTo: 'dvds'},
  { path: '**', component: PageNotFoundComponent },



];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyPhotosComponent } from './my-photos/my-photos.component';
import { AlbumPhotosComponent } from './my-photos/album-photos/album-photos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'myphotos', component: MyPhotosComponent, 
    children: [
      {
        path: "album/:id",
        component: AlbumPhotosComponent
      }
    ]},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

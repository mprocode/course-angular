import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { MyPhotosComponent } from './my-photos/my-photos.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { AlbumListComponent } from './my-photos/album-list/album-list.component';
import { AlbumComponent } from './my-photos/album/album.component';
import { DragScrollDirective } from './my-photos/album-list/drag-scroll.directive';
import { AlbumPhotosComponent } from './my-photos/album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyPhotosComponent,
    SideNavMenuComponent,
    AlbumListComponent,
    AlbumComponent,
    DragScrollDirective,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

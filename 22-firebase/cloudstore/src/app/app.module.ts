import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MyFilesComponent } from './my-files/my-files.component';


@NgModule({
  declarations: [
    AppComponent,
    DropzoneComponent,
    UploadFilesComponent,
    MyFilesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

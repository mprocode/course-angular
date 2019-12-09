import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FileEntry } from './fileentry';
import {filter,map, first, tap, take, finalize, combineLatest} from "rxjs/operators";
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { from, Observable } from 'rxjs';
import { MyFilesService } from '../my-files.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  private files: FileEntry[] = [];

  constructor(
    private storage: AngularFireStorage,
    private myfilesService: MyFilesService) { }

  ngOnInit() {
  }

  onDropFiles(files: FileList) {
    this.files.splice(0, this.files.length);
    console.log(files);
    for(let i=0;i<files.length;i++) {
      //this.myfilesService.uploadFile(files.item(i));
      
      this.files.push({
        file: files.item(i),
        percentage: null, 
        uploading: null, finished: null, task: null, canceled: null,
        error: null, paused: null, bytesuploaded: null, state: null
      });
    }
  }

  removeFileFromList(i) {
    if (i<this.files.length)
      this.files.splice(i,1);
  }  

  uploadAll() {
    for(let f of this.files) {
      this.myfilesService.upload(f);
    }
  }


  
}

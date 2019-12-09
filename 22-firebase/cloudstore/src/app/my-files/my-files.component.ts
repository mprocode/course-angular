import { Component, OnInit } from '@angular/core';
import { MyFilesService } from '../my-files.service';
import { Observable } from 'rxjs';
import { MyFile } from '../myfile.model';
import { switchMapTo, map, mergeMap, mergeAll, finalize, last } from 'rxjs/operators';

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.css']
})
export class MyFilesComponent implements OnInit {

  myfiles: Observable<MyFile[]>;

  constructor(
    private myfilesService: MyFilesService) { }

  ngOnInit() {
    this.myfiles = this.myfilesService.getFiles();
    //this.myfiles.subscribe((files)=> {
    // files.forEach(f=>this.urlDownload(f).pipe(last()).subscribe(url=>console.log(url)));
    //})

  }

  getDate(time):Date {
    return new Date(time);
  }

  delete(f: MyFile) {
    this.myfilesService.deleteFile(f);
  }

}

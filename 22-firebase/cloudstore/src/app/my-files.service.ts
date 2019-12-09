import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { MyFile } from './myfile.model';
import { Observable, from, Subscription, timer, throwError, of, combineLatest, forkJoin } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { map, finalize, take, tap, catchError } from 'rxjs/operators';
import { FileEntry } from './upload-files/fileentry';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MyFilesService {

  private filesCollection: AngularFirestoreCollection<MyFile>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage) 
  {
    this.filesCollection = afs.collection('myfiles', 
      ref => ref.orderBy('date', 'desc') ) ;
  }

  fillAttributes(f: FileEntry) {
    let snapshot: Observable<UploadTaskSnapshot> = f.task.snapshotChanges();
    f.percentage = f.task.percentageChanges();
    f.uploading = f.state.pipe(map((s) => s == "running"));
    f.canceled = f.state.pipe(map((s) => s == "canceled"));
    f.error = f.state.pipe(map((s) => s == "error"));
    f.paused = f.state.pipe(map((s) => s == "paused"));
    f.bytesuploaded = snapshot.pipe(map((s) => s.bytesTransferred));      
    f.finished = from(f.task).pipe(map(s=>s.state=="success"));
  }

  uploadFile(f: File) {
    let newfilename = `${(new Date()).getTime()}_${f.name}`;
    let path = `myfiles/${newfilename}`;
    let task = this.storage.upload(path, f);
    task.snapshotChanges()
      .subscribe((s)=>console.log(s));
  }

  upload(f: FileEntry) {
    let newfilename = `${(new Date()).getTime()}_${f.file.name}`;
    let path = `myfiles/${newfilename}`;
    f.task = this.storage.upload(path, f.file);
    f.state = f.task.snapshotChanges().pipe(
      map(e=>(f.task.task.snapshot.state)),
      catchError(s=>{
        return of(f.task.task.snapshot.state)
      }));

    this.fillAttributes(f);

    //f.task.snapshotChanges()
    //  .subscribe((s)=>console.log(s));

    let  s: Subscription = f.task.snapshotChanges().pipe(
      finalize(() => {
        console.log(f.task.task.snapshot.state);
        if (f.task.task.snapshot.state == "success")
          this.addFile({ 
            filename: f.file.name, 
              size: f.file.size, 
              path: path, 
              date: new Date().getTime()
            });
      }))
      .subscribe();

    //timer(1000,2000)
    //  .subscribe(()=>console.log(s.closed));
  }

  getFiles(): Observable<MyFile[]>  {
    return this.filesCollection.snapshotChanges()
      .pipe(map((actions) => {
        return actions.map(a => {
          const file: MyFile = a.payload.doc.data();
          const id = a.payload.doc.id;
          const url = this.storage.ref(file.path).getDownloadURL();
          return { id, ...file, url };
        });
      }))
  } 

  addFile(f: MyFile) {
    return this.filesCollection.add(f);
  }  

  deleteFile(f: MyFile) {
    this.storage.ref(f.path).delete();
    this.filesCollection.doc(f.id).delete();
  }
 

}

//https://github.com/angular/angularfire2/issues/1805
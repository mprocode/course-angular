import { Observable } from 'rxjs';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';

export interface FileEntry {
    file: File;
    task: AngularFireUploadTask;
    percentage: Observable<number>;
    uploading: Observable<boolean>;
    finished: Observable<boolean>;
    paused: Observable<boolean>;
    error: Observable<boolean>;
    canceled: Observable<boolean>;
    bytesuploaded: Observable<number>;
    state:Observable<string>
}
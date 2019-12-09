import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationComponent } from './notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackbar: MatSnackBar) { }

  notifyError(msg: string) {
    let snackBarRef = this.snackbar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: { error: true, msg: msg},
      panelClass: ['error']
    });
  }

  notifySuccess(msg: string) {
    let snackBarRef = this.snackbar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: { error: false, msg: msg},
      panelClass: ['success']
      
    });
  }
}

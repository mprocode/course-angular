import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ NotificationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    NotificationComponent
  ],
  exports: [ NotificationComponent ]

})
export class NotificationModule { }

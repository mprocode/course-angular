import { Component, OnInit, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-notification-success',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  private msg: string;
  private error: boolean;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: {msg: string, error: boolean}) {
    this.msg = data.msg;
    this.error = data.error;
  }

  ngOnInit() {
  }

}

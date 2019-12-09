import { Component, OnInit, Input } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { DataModel } from '../../datamodel';

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.css']
})
export class SubjectChildComponent implements OnInit {

  @Input() subjectName: string;
  @Input() subject: Subject<DataModel>;
  @Input() mainObservable: Observable<DataModel>;

  private subscription: Subscription;
  private connected: boolean = false;
  private log: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.log = [];
  }

  logData(data: DataModel) {
    this.log.push("Timestamp: " + data.timestamp + " Data: " + data.data);
  }

  connect() {
    this.log.push("Connected!");
    this.connected = true;
    this.subscription = this.subject.subscribe(
      (data: DataModel) => { this.logData(data); },
      (error: any) => { this.connected = false; },
      () => { this.connected = false; this.log.push("Finished!");}
    );
  }

  disconnect() {
    this.connected = false;
    this.subscription.unsubscribe();
  }

}

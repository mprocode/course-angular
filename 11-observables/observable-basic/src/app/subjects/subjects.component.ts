import { Component, OnInit } from '@angular/core';
import { GenRandomDataService } from '../gen-random-data.service';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { DataModel } from '../datamodel';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  private subject: Subject<DataModel>;
  private replaySubject: ReplaySubject<DataModel>;
  private asyncSubject: AsyncSubject<DataModel>;
  private behaviorSubject: BehaviorSubject<DataModel>;

  constructor(private dataservice: GenRandomDataService) { }

  ngOnInit() {
    this.subject = new Subject<DataModel>();
    
    this.replaySubject = new ReplaySubject<DataModel>();

    this.asyncSubject = new AsyncSubject<DataModel>();

    // In order to accomplish this, we must provide a seed 
    // (or default) value when creating a new BehaviorSubject.
    this.behaviorSubject = new BehaviorSubject<DataModel>({ timestamp: 0, data: 0});

    this.dataservice.dataObservable.subscribe(this.subject);
    this.dataservice.dataObservable.subscribe(this.replaySubject);
    this.dataservice.dataObservable.subscribe(this.asyncSubject);
    this.dataservice.dataObservable.subscribe(this.behaviorSubject);
  }

  connect() {
    this.dataservice.dataObservable.connect();
  }
}

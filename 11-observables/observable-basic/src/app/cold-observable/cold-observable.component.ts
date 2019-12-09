import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.css']
})
export class ColdObservableComponent implements OnInit {

  private n1: number = 0;
  private s1: string = '';
  private n2: number = 0;
  private s2: string = '';
  private n: number = 0;
  constructor() { }

  ngOnInit() {

    const myIntervalObservable = new Observable( 
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(()=> {
          i++; 
          this.n++;
          if (i == 100)
            observer.complete();
          else 
            observer.next(i);
        }, 1000);
        return () => { clearInterval(id); }
      });

    // Observable só começa a partir do subscribe
      
    // Subscriber 1
    this.s1 = "waiting for interval...";
    myIntervalObservable.subscribe(
      (_n) => {this.n1 =_n; this.s1 = "OK! ";},
      (_n) => {this.s1 = 'Error in ' + _n; },
      () => {this.s1 = 'Completed';}
    );
    
    // Subscriber 2
    this.s2 = "waiting for interval...";
    setTimeout(() => {
      myIntervalObservable.subscribe(
        (_n) => {this.n2 =_n; this.s2 = "OK! ";},
        (_n) => {this.s2 = 'Error in ' + _n; },
        ()   => {this.s2 = 'Completed';}
      );
    }, 3000); 
    /*
      creates the producer
      activates the producer
      starts listening to the producer
      unicast    
    */
    // An observable is cold if the producer of its notifications 
    // is created whenever an observer subscribes to the observable. 
    // For example, a timer observable is cold; 
    // each time a subscription is made, a new timer is created.
    //
    // Cold observables are UNICAST, as each observer receives notifications 
    // from the producer that was created when the observer subscribed.
  }

}

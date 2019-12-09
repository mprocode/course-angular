import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  private n1: number = 0;
  private s1: string = '';
  private n2: number = 0;
  private s2: string = '';


  subscription1: Subscription;
  subscription2: Subscription;

  constructor() { }
  
  ngOnInit() {

    this.s1 = 'initializing...';
    this.s2 = 'initializing...';

    // Entendendo data/complete/error
    const myFirstObservable = new Observable(
      (observable: Observer<number>) => {
        observable.next(1);
        observable.next(2);
        observable.next(3);
        observable.next(4);
        observable.next(5);
        observable.complete();
        observable.error(6);
      }
    );
    myFirstObservable.subscribe(
      (n: number) => { console.log(n) ; },
      (error: any) => { 
        console.log('Error: '); 
        console.log(error); 
      },
      () => {console.log('Done!')}
    );

    /*
    const timerCounter = interval(1000);
    timerCounter.subscribe( (_n) => {
      this.n = _n;
    });
    */

    // Unsubscribe

    const myIntervalObservable = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(()=> {
          i++;
          console.log('from Observable: ' + i);
          if (i == 10)
            observer.complete();
          //else if (i == 5)
          //  observer.error(i);
          else if (i % 2 == 0)
            observer.next(i);
        }, 1000);
        return () => { 
          clearInterval(id); 
          console.log('unsubscribe');
        }
      });
    
    
    this.subscription1 = myIntervalObservable.subscribe(
      (_n) => {this.n1 =_n;},
      (_n) => {this.s1 = 'Error in ' + _n; },
      () => {this.s1 = 'Completed';}
    );

    this.subscription2 = myIntervalObservable.subscribe(
      (_n) => {this.n2 =_n;},
      (_n) => {this.s2 = 'Error in ' + _n; },
      ()   => {this.s2 = 'Completed';}
    );

    // Unsubscribe
    setTimeout(()=>{
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
    }, 15000);

  }


}

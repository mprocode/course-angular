import { Component, OnInit } from '@angular/core';
import { from, of, fromEvent, timer, interval, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  subscriptions: Subscription = new Subscription();


  constructor() { }

  ngOnInit() {
    console.clear();
  }
  
  observableCreateClick() {
    const hello = Observable.create((observer) => {
      observer.next('Hello');
      observer.next('from');
      observer.next('observable!');
      observer.complete();
    });
    const subscription: Subscription = hello.subscribe(val => console.log(val));
  }

  fromClick() {
    from([1,2,3,4,5, {x:10,y:20}])
      .subscribe(i=>console.log(i));
    const source =from([1,2,3,4,5, {x:10,y:20}]);
    source.subscribe(i=>console.error(i));
    source.subscribe(i=>console.warn(i));
      
  }

  ofClick(){
    of([1,2,3,4,5])
      .subscribe(i=>console.log(i));
    of({x:10,y:20})
      .subscribe(i=>console.log(i));
  }

  fromEvent() {
    const subscription = fromEvent(document, 'click')
      .subscribe((e: MouseEvent)=>console.log(e))    
    this.subscriptions.add(subscription);
  }

  intervalClick() {
    const subscription = interval(2000)
      .subscribe( i=> console.log("Interval: " + i))
    this.subscriptions.add(subscription);
  }

  timerClick() {
    //timer(1000) //somente 1
    //timer(3000, 1000) // continuo depois de 3000
    const subscription = timer(1000, 1000) // continuo depois de 1000
      .subscribe(
        i=>console.log("Timer: " + i));
    this.subscriptions.add(subscription);      
  }

  ngOnDestroy() {
    console.log("Component has just been destroyed")
  }

  unsubscribeClick() {
    this.subscriptions.unsubscribe();
    this.subscriptions = new Subscription();
  }

/*

  observableCreateClick() {
    const hello = Observable.create((observer) => {
      observer.next('Hello');
      observer.next('from');
      observer.next('observable!');
      observer.complete();
    });
    const subscription = hello.subscribe(val => console.log(val));
  }

  fromClick() {
    from([1,2,3,4,5, {x:10,y:20}])
      .subscribe(i=>console.log(i));
    const source =from([1,2,3,4,5, {x:10,y:20}]);
    source.subscribe(i=>console.error(i));
    source.subscribe(i=>console.warn(i));
      
  }

  ofClick(){
    of([1,2,3,4,5])
      .subscribe(i=>console.log(i));
    of({x:10,y:20})
      .subscribe(i=>console.log(i));
  }

  fromEvent() {
    fromEvent(document, 'click')
      .subscribe((e: MouseEvent)=>console.log(e))    
  }

  intervalClick() {
    interval(2000)
      .subscribe( i=> console.log("Interval: " + i))
  }

  timerClick() {
    //timer(1000) //somente 1
    //timer(3000, 1000) // continuo depois de 3000
    timer(1000, 1000) // continuo depois de 1000
      .subscribe(i=>console.log("Timer: " + i));
  }



*/


}

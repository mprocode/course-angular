import { Component, OnInit, ViewChild } from '@angular/core';
import {from, fromEvent, interval, Observable, Subscription, Subject, timer} from 'rxjs';
import {map, delay, filter, tap, take, first, last, debounceTime, takeUntil, takeWhile} from 'rxjs/operators';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  @ViewChild(MatRipple) ripple: MatRipple;

  searchInput = '';

  constructor() { }

  ngOnInit() {
  }

  mapClick() {
    from([1,2,3,4,5])
      .pipe(
        map(i=>"Number: " + i),
        delay(2000))
      .subscribe(i=>console.log(i))    
    
    fromEvent(document, 'click')
      .pipe( 
        map ((e: MouseEvent) => ({ x: e.screenX, y: e.screenY})))
      .subscribe((pos)=>console.log(pos));
  }

  filterClick() {
    from([1,2,3,4,5])
      .pipe(
        filter(i=>i==2))
      .subscribe(i=>console.log("i = ", i));
    
    interval(1000)
      .pipe(
        filter(i=>i%2===0),
        map(i=>"Value: " + i),
        delay(1000)
      )
      .subscribe(i => console.log(i));
  }
  
  tapClick() {
    interval(1000)
      .pipe(
        tap(i=>console.log('')),
        tap(i=>console.warn('Before filter: ', i)),
        filter(i=>i%2===0),
        tap(i=>console.warn('After filter: ', i)),
        map(i=>"Value: " + i),
        tap(i=>console.warn('After map: ', i)),
        delay(1000),
        tap(i=>console.warn('After delay: ', i)),
      )
      .subscribe(i => console.log(i));    
  }

  takeClick() {
    const observable = new Observable((observable) => {
      let i; 
      for(i=0;i<20;i++)
        setTimeout(()=> observable.next( Math.floor(Math.random()*100)), i*100 );
      setTimeout(()=> observable.complete(), i*100 );
    });

    const s: Subscription = observable
      .pipe(
          tap(i=>console.log(i)),
          take(10),  // take 10 elements and unsubscribe
          //first(), // unsubscribe after take the first element
          //last(),  // unsubscribe after take the last element
      )
      .subscribe(v=>console.log('Output: ' + v));

    const interv = setInterval(()=>{
      console.log('checking...')
      if (s.closed) {
        console.warn('Subscription CLOSED!');
        clearInterval(interv);
      }
    }, 200);
    
  }

  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true
    });
    rippleRef.fadeOut();
  }

  debounceClick() {
    // Discard emitted values that take less than the specified time, 
    // based on selector function, between output.
    fromEvent(document,'click')
      .pipe(
        tap(()=>console.log('click')),
        debounceTime(1000)
      )
    .subscribe((e: MouseEvent) => {
      console.log("Click with debounceTime: ", e);
      this.launchRipple();
    });
  }

  searchEntry$ : Subject<String> = new Subject<String>();
  searchByUsingDebounce(event) {
    this.searchEntry$.next(this.searchInput);
  }
  debounceSearchClick() {
    this.searchEntry$
      .pipe( debounceTime(1000))
      .subscribe((s) => console.log(s) );
  }

  takeWhileClick() {
    new Observable((observer)=>{
      interval(1000)
        .subscribe(i=>observer.next(i*10))
    })
    .pipe(
      takeWhile((value, index) => (value < 100) )
    )
    .subscribe((i) => console.log("takeWhile: " + i))    
  }

  takeUntilClick() {
    let duetime = timer(5000);

    new Observable((observer)=>{
      interval(1000)
        .subscribe(i=>observer.next(i))
    })
    .pipe(
      takeUntil(duetime)
    )
    .subscribe((i) => console.log("takeUntil: " + i))    
  }

}

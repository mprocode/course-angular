import { Component, OnInit } from '@angular/core';
import { Subject, interval, Subscription, from, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribing',
  templateUrl: './unsubscribing.component.html',
  styleUrls: ['./unsubscribing.component.css']
})
export class UnsubscribingComponent implements OnInit {

  private unsubscribeAll$: Subject<void> = new Subject();

  private subscriptions: Subscription[] = [];
  private checkInterval: Subscription = null;
  private subscriptionsAreActive = false;

  constructor() { }

  ngOnInit() {
    this.checkSubscriptions();
  }

  checkSubscriptions() {
    this.checkInterval = interval(100).subscribe(()=>{
      let active = false;
      this.subscriptions.forEach( (s) => {
        if (!s.closed) 
          active = true;
      })
      this.subscriptionsAreActive = active;
    });
  }

  subscribe() {
    const subscription1 = interval(200)
      .pipe( takeUntil( this.unsubscribeAll$ ))
      .subscribe( (i) => console.log(i)) 
    const subscription2 = fromEvent(document, 'mousemove')
      .pipe( takeUntil( this.unsubscribeAll$ ))
      .subscribe( (e) => console.log(e))
  
    this.subscriptions.push( subscription1 );
    this.subscriptions.push( subscription2 );
  }

  unsubscribe() {
    this.unsubscribeAll$.next();
  }

  ngOnDestroy() {
    if (this.checkInterval) 
      this.checkInterval.unsubscribe();
  }
}

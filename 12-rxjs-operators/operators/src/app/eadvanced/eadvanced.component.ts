import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, interval, from, of, Subject, } from 'rxjs';
import { switchMap, delay, map, debounceTime, tap } from 'rxjs/operators';


@Component({
  selector: 'app-eadvanced',
  templateUrl: './eadvanced.component.html',
  styleUrls: ['./eadvanced.component.css']
})
export class EAdvancedComponent implements OnInit {

  serviceFinder;
  text: string;
  count = 0;

  public keyUpSub = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.keyUpSub
    /*
    .pipe(
      debounceTime(200),
      switchMap(e => this.myservice(e)),
    )
    .subscribe(res=>console.log(res));  
    */  
    .subscribe(event => this.myservice(event)
    .subscribe(res=>console.log(res))); 


    /*
    .subscribe(event => this.myservice(event)
    .subscribe(res=>console.log(res))); */
  }

  myservice(t: string) : Observable<any> {
    this.count++;
    return of(t)
      .pipe(
        map(s=> this.count + ": " + s),
        tap((s)=>{console.log("[" + this.count + "] Myservice called for: " + s)}),
        delay(1000),
        map(t => "Result for: " + t)
      ); 
  }


}

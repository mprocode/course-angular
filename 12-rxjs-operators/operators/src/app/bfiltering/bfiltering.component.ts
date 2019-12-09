import { Component, OnInit } from '@angular/core';
import { toArray, map, delay, take, debounce, debounceTime, last, first, timeout, skipUntil, takeUntil } from 'rxjs/operators';
import { from, fromEvent, interval, timer, Observable,  } from 'rxjs';

@Component({
  selector: 'app-bfiltering',
  templateUrl: './bfiltering.component.html',
  styleUrls: ['./bfiltering.component.css']
})
export class BFilteringComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    fromEvent(document,'click')
      .pipe(
        debounceTime(1000)
      )
    .subscribe((e: MouseEvent) => console.log("Click with debounceTime: ", e));

    from([1,2,3,4,5])
      .pipe(
        map(i=>"Number: " + i),
        delay(2000)
      )
      .subscribe(i=>console.log(i))
      
    //Delay com mais evidencia
    fromEvent(document, 'click')
      .pipe(
        map((i: MouseEvent)=>"Click delayed. X: " + i.screenX + " Y: " + i.screenY),
        delay(2000)
      )
    .subscribe(i=>console.log(i));
    
    from([1,2,3,4,5])
      //.pipe(last())
      //.pipe(first())
      .pipe(take(2))
      //.subscribe(i=>console.log("Last: " + i));
      //.subscribe(i=>console.log("first: " + i));
      .subscribe(i=>console.log("take: " + i));

    
    let duetime = timer(5000);

    new Observable((observer)=>{
      interval(1000)
        .subscribe(i=>observer.next(i))
    })
    .pipe(
      takeUntil(duetime)
    )
    .subscribe((i) => console.log("Until: " + i))


  }

}

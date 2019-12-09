import { Component, OnInit } from '@angular/core';
import { Observable, of, timer, throwError } from 'rxjs';
import { map, catchError, timeout, retry, tap, delay, retryWhen } from 'rxjs/operators';


@Component({
  selector: 'app-derror-handling',
  templateUrl: './derror-handling.component.html',
  styleUrls: ['./derror-handling.component.css']
})
export class DErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // catchError / retry / retryWhen
    let obj: Observable<any> = new Observable((observer) => {
      for (let i=0;i<10;i++) {
        if (i==7)
          observer.error("An error occurred when i="+i); // ou return throwError('');
        else 
          observer.next(i);
      }
      observer.complete();
    });

    obj.pipe(
      map((i)=>i*10),
      tap(i=>console.log("Before Error Handling: " + i)),
      /*
      //catchError((error) => of(0)), // return 0
      catchError((error) => {
        console.error("Error: " + error + ". Returning 0.");
        return of(0);
      }), */
      catchError((error) => {
        console.error("Error: " + error + ". Returning error.");
        return throwError('Error message.');
      }),      
      //retry(2),
      //retryWhen((i => timer(5000))),
    )
    .subscribe(
      res => console.log("Normal output: " + res),
      err => console.error("Error: ", err),
      () => console.log("Complete!")
    )

    // timeout

    let obj2: Observable<any> = new Observable((observer) => {
      timer(2000)
        .subscribe((n)=>observer.next(1000));
      timer(2500)
        .subscribe((n)=>observer.complete());
    });

    obj2
      .pipe( timeout(3000), )
      .subscribe(
        (n) => console.log("N = " + n),
        (e) => console.error(e),
        () => console.log("Complete!")
      )
      
      
  }

}

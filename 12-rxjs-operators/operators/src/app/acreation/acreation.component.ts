import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { toArray, map, delay, take } from 'rxjs/operators';
import { from, fromEvent, interval, timer } from 'rxjs';

interface User {
  login: string;
  name: string;
}

@Component({
  selector: 'app-acreation',
  templateUrl: './acreation.component.html',
  styleUrls: ['./acreation.component.css']
})
export class ACreationComponent implements OnInit {

  private options$: Observable<string[]>;

  private user$: Observable<User>;

  constructor() { }

  ngOnInit() {
    //this.options$ = new Observable<string>((observer) => {
    this.options$ = Observable.create((observer) => {
      for (let i=0;i<10;i++) {
        observer.next("This is my " + i + "st string");
      }
      observer.complete();
    })
    .pipe(
      map((s) => s + '!'),
      toArray()
    );
    const subscribe = this.options$.subscribe(s => console.log(s));

    this.user$ = new Observable<User>((observer) => {
      let names  = [ "Mr. James", "Mr. John", "Mr. Ray", "Ms. Angel"];
      let users = [ "ujames", "ujohn", "uray", "uangel"];
      let i = 0;
      console.log("Here");
      setInterval(()=> {
        (i == 4 ) ? observer.complete() : observer.next( {login: users[i], name: names[i] });
        i++;
      }, 2000);
    });
    //this.user$.subscribe((s)=> console.log(s))
    
    from([1,2,3,4,5])
      .pipe(
        map(i=>"Number: " + i),
        delay(2000)
      )
      .subscribe(i=>console.log(i))

    fromEvent(document, 'click')
      .subscribe((e: MouseEvent)=>console.log(e))
      
    let subs_interv = interval(2000)
      .pipe(
        take(3))
      .subscribe((i)=> {
        console.log(i);
        if (i==10)
          subs_interv.unsubscribe();
      });

    timer(5000,1000)
      .subscribe(i=>console.log("Timer: " + i));


  }

}

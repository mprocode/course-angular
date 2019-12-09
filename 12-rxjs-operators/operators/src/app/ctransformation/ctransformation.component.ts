import { Component, OnInit } from '@angular/core';
import { from, fromEvent, timer,   } from 'rxjs';
import { windowTime, tap, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-ctransformation',
  templateUrl: './ctransformation.component.html',
  styleUrls: ['./ctransformation.component.css']
})
export class CTransformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source = timer(0, 1000);
    const example = source.pipe(
      tap( i => console.log('First timer: ' + i)),
      windowTime(3000),
      tap(i => console.log('New time: ', i))
    );
    example.subscribe();    




  }

}

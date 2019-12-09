import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

import {from, fromEvent, Observable, Observer} from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  @ViewChild('myrect') myrect: ElementRef;
  
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    //let mousemove = fromEvent(document.getElementById('myrect'), 'mousemove');
    let mousemove = fromEvent(this.myrect.nativeElement, 'mousemove');
    let click = fromEvent(document.getElementById('myrect'), 'click');

    //mousemove
    //.subscribe((e) => console.log(e));

    mousemove
      .pipe(
        map((e: MouseEvent) => ({x: e.screenX, y: e.screenY})),
        tap(e => console.log('1st Tap: ', e)),
        filter(e => e.x % 2 === 0 && e.y%2 ===0),
        map(e => ({x: e.x+100, y: e.y+100})),
      )      
      .subscribe((e) => console.log('%c Final result: ', 'background: black; color: yellow', e));
    
  }
  click() {
    console.log(this.el);
    console.log(this.myrect);
    
  }

}

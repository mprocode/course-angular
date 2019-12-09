import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { from, fromEvent, Observable, Observer} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {
  @ViewChild('myrect') myrect: ElementRef;
  top: number = 40;
  left: number = 40;
  constructor() { }

  ngOnInit() {
    
    let mousemove = fromEvent(document, 'mousemove');
    let mousedown = fromEvent(this.myrect.nativeElement, 'mousedown');
    let mouseup   = fromEvent(document, 'mouseup');
    //console.log(this.myrect);
    mousedown.subscribe((e: MouseEvent) => {
      let x = e.screenX;
      let y = e.screenY;
      mousemove
        .pipe(
          takeUntil(mouseup))
        .subscribe((e: MouseEvent) => {
          //console.log(e);
          let offsetx = x-e.screenX;
          let offsety = y-e.screenY;
          this.top -= offsety;
          this.left -= offsetx;
          x = e.screenX;
          y = e.screenY;
          // console.log("new top:" + this.top + "; new left:" + this.left);
        });
      console.log(e)
    });

  }


}

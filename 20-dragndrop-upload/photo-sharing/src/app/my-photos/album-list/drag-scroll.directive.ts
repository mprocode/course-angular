import { Directive, ElementRef, HostListener } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive({
  selector: '[appDragScroll]'
})
export class DragScrollDirective {

  subscriptionMouseMove: Subscription = null;
  subscriptionDrag: Subscription = null;
  startX = 0;

  constructor(private el: ElementRef) { }
  
  @HostListener('mousedown', ['$event'])
  start(event) {
    console.log('start', event);
    this.startX  = event.screenX;
    this.subscriptionMouseMove = 
      fromEvent<MouseEvent>(document.documentElement, 'mousemove')
        .subscribe((e) => this.onMouseMove(e));

    this.subscriptionDrag = 
      fromEvent<DragEvent>(this.el.nativeElement, 'drag')
        .subscribe((e) => this.dragMove(e));
  }

  @HostListener('document:mouseup')
  stop() {
    this.unsubscribeEvents();
  }

  //@HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!event.buttons)
      this.unsubscribeEvents();
    this.moveTo(event.screenX, event.screenY);
  }

  dragMove(event: DragEvent) {
    this.moveTo(event.screenX, event.screenY);
  }

  moveTo(x,y) {
    console.log("X: ", x, "Y: ", y);
    let offset = this.startX - x;
    this.startX = x;
    console.log('offset', offset);
    //if (this.el.nativeElement.scrollLeft != 0 || offset>0)
    this.el.nativeElement.scrollLeft += offset;
    console.log(this.el.nativeElement.scrollLeft);
    console.log(this.el);
  }

  unsubscribeEvents() {
    if (this.subscriptionMouseMove) {
      this.subscriptionMouseMove.unsubscribe();
      this.subscriptionMouseMove = null;
    }
    if (this.subscriptionDrag) {
      this.subscriptionDrag.unsubscribe();
      this.subscriptionDrag = null;
    }

    console.log('stop');

  }
}

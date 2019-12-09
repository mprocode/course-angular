import { Directive, Input, HostListener, ElementRef, HostBinding } from '@angular/core';
import { Subject, interval,  } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';


@Directive({
  selector: '[appBluefy]'
})
export class BluefyDirective {

  @Input() appBluefy: string;

  private highlighted: boolean = false;
  private colorByte = 0xff;
  private backgroundColorOriginal: string; 
  private stopSubj: Subject<string> = new Subject();

  constructor(private el: ElementRef) { 
    this.backgroundColor = el.nativeElement.style.backgroundColor;
    this.backgroundColorOriginal = el.nativeElement.style.backgroundColor;
  }

  updateBgColor() {
    if (this.colorByte > 0)
      this.colorByte -= 10 ;
    this.backgroundColor = "rgba(" + this.colorByte + ", " + this.colorByte + ", 255, 1)";
  }

  @HostListener('mousedown')
  start() {
    console.log('start');
    console.log(this.appBluefy);
    this.colorByte = 0xff;
    interval(50).pipe(
      takeUntil(this.stopSubj.asObservable()),
      tap(() => this.updateBgColor())
    ).subscribe();
  }

  @HostListener('mouseup')
  stop() {
    console.log('stop');
    this.stopSubj.next('stop');
    this.backgroundColor = this.backgroundColorOriginal;
  }

  @HostListener('mouseenter')
  highlight() {
    this.highlighted = true;
    console.log('mouseenter');
  }

  @HostListener('mouseleave')
  unhighlight() {
    this.highlighted = false;
    this.stop();
  }

  @HostBinding('style.border-color')
  get borderColor() {
    return this.highlighted ? "#FF0000" : null;
  }

  @HostBinding('style.border-style')
  get borderStyle() {
    return this.highlighted ? "solid" : null;
  }

  @HostBinding('style.border-width')
  get borderWidth() {
    return this.highlighted ? "2px" : null;
  }

  @HostBinding('style.background-color')
  backgroundColor: string;
  

}

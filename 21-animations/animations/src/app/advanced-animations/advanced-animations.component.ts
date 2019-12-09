import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, QueryList, ContentChildren, ViewContainerRef, Renderer2, Directive, ViewChild } from '@angular/core';
import { trigger, transition, query, style, animate, AnimationStyleMetadata, stagger, keyframes, group, AnimationBuilder } from '@angular/animations';

const randomXY = ():AnimationStyleMetadata =>  {  
  let x = Math.round( Math.random()*300 + 200 );
  x *= (x%2==1)?-1:1;
  let y = Math.round( Math.random()*200 + 200 );
  y *= (y%2==1)?-1:1;
  return style({ transform: `translateY(${y}px) translateX(${x}px)`});
}

const randomStyles = ():AnimationStyleMetadata => {
  let opacity = Math.random();
  let scale = Math.random();
  let x = Math.round( Math.random()*300 + 200 );
  x *= (x%2==1)?-1:1;
  let y = Math.round( Math.random()*200 + 200 );
  y *= (y%2==1)?-1:1;  
  let rot = Math.random()*360;
  const s= style({ 
    transform: `scale(${scale}) rotateX(${rot}deg) translateY(${y}px) translateX(${x}px)`,
    opacity: opacity });
  console.log(s);
  return s;
}

@Directive({
  selector: '[appImageDirective]',
})
export class ImageDirective {}

@Component({
  selector: 'app-advanced-animations',
  templateUrl: './advanced-animations.component.html',
  styleUrls: ['./advanced-animations.component.scss'],

  animations: [
    trigger('animateImages', [
      transition(':enter', [
        query('img', [
          //style({transform: "translateY(-200px) translateX(-200px)"}),
          randomXY(),
          //animate('2s cubic-bezier(.42,-0.66,.24,1.35)') //http://cubic-bezier.com/#.42,-0.66,.24,1.35
          stagger(-20, animate('2s cubic-bezier(.42,-0.66,.24,1.35)'))
        ])
      ])
    ]),

    trigger('animateImagesGroup', [
      transition(':enter', [
        query('img', [
          randomStyles(),
          group([
            animate('500ms ease-in', style({opacity: "*"})),
            animate('1s cubic-bezier(.42,-0.66,.24,1.35)', style({transform: "rotateX(0) translateY(0px) translateX(0px) scale(1)"})),
          ])
        ])
      ])
    ]),    
  ]
})
export class AdvancedAnimationsComponent implements OnInit, AfterViewInit {

  @ViewChildren( ImageDirective, {read: ElementRef}) imagesElements: QueryList<ElementRef>;

  images = [];

  constructor(private builder: AnimationBuilder, private renderer: Renderer2,) {
    for(let i=1; i<=16; i++)
      this.images.push(`/assets/fig/${i}.png`);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.imagesElements);
  }

  animate(el: ElementRef) {
    const factory = this.builder.build([
      randomStyles(),
      group([
        animate('2s ease-in', style({opacity: "*"})),
        animate('3s cubic-bezier(.42,-0.66,.24,1.35)', style({transform: "rotateY(720deg) translateY(0px) translateX(0px) scale(1)"})),
      ])
    ]);
    const player = factory.create(el);
    player.play();
  }

  animateAll() {
    this.imagesElements.forEach(i=>this.animate(i.nativeElement));
  }
}

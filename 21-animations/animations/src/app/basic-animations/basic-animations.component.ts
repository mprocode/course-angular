import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';
import { from, of, timer } from 'rxjs';
import { take, delay, timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-basic-animations',
  templateUrl: './basic-animations.component.html',
  styleUrls: ['./basic-animations.component.scss'],
  animations: [

    trigger('fade', [
      // ...
      state('in', style({
        opacity: 1,
      })),
      state('out', style({
        opacity: 0,
      })),
      transition('in => out', [
        animate('1s')
      ]), 
      transition('out => in', [
        animate('0.5s')
      ]), 
    ]), 

    trigger('size', [
      // ...
      //state('shrink', style("*")),
      
      // Fazer com e sem esse estado inicial
      state('shrink', style({
        width: "100px",
        height: "100px",
        backgroundColor: "indigo"
      })),

      state('enlarge', style({
        width: "200px",
        height: "200px",
        backgroundColor: "goldenrod"
      })),
/*
      transition('shrink => enlarge', [
        animate('2s')
      ]),        
      transition('enlarge => shrink', [
        animate('1s')
      ]),        
*/
      
      transition('* => enlarge', [
        animate('2s')
      ]),        
      transition('* => shrink', [
        animate('1s')
      ]),
      

      /*
      transition('* <=> *', [
        // style({ backgroundColor: "yellow"}), //definir cor inicial antes da transicao
        animate('1s')
      ]),
      */      
    ]),  
  
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),    

    trigger('itemAnimate', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.4s'),
      ]),
      transition(':leave', [
        animate('0.4s', style({
          transform: 'translateX(200%)',
          opacity: 0
        })),
      ])     
    ]),

    trigger('animRotate', [
      transition('*=>right', [
        style({
          transform: "translateX(-300%) rotateY(-360deg) ",
        }),
        animate("1s ease-out")

      ]),
      transition('*=>left', [
        animate("1s ease-in-out", style({
          transform: "translateX(300%) rotateY(360deg) ",
        }))
      ]),      
    ]),

    trigger('animText', [
      transition('*=>*', [
        animate('1s', keyframes([
          style({ color: "#ff004d", offset: 0}),
          style({ color: "#ff77ab", offset: 0.2}),
          style({ color: "#00e756", offset: 0.4}),
          style({ color: "#29adff", offset: 0.6}),
          style({ color: "#ff77ab", offset: 1}),        
        ]))
      ])
    ]),

    trigger('shakeAnim', [
      transition('* => *', [
        style({  transform: "translate3d(0, 0, 0)"}),
        animate('1s cubic-bezier(0.36,0.07,0.19,0.97)', 
        keyframes([
          style({ transform: "translate3d(-1px, 0, 0)", offset: 0.1 }),
          style({ transform: "translate3d(2px, 0, 0)", offset: 0.2 }),
          style({ transform: "translate3d(-4px, 0, 0)", offset: 0.3 }),
          style({ transform: "translate3d(4px, 0, 0)", offset: 0.4 }),
          style({ transform: "translate3d(-4px, 0, 0)", offset: 0.5 }),
          style({ transform: "translate3d(4px, 0, 0)", offset: 0.6 }),
          style({ transform: "translate3d(-4px, 0, 0)", offset: 0.7 }),
          style({ transform: "translate3d(2px, 0, 0)", offset: 0.8 }),
          style({ transform: "translate3d(-1px, 0, 0)", offset: 0.9 }),
        ]))
      ])
    ]),

  ], 
})
export class BasicAnimationsComponent implements OnInit {

  fade = true; 
  rectSize = false;
  items = [];
  animateItems = [];
  showItem = false;
  rotate = "";
  animText = 1;
  shakeAnim = 1;

  constructor() { }

  ngOnInit() {
  }

  addElement() {
    this.items.push(this.items.length+1);
    this.animateItems.push(0);
  }
  removeLast() {
    if (this.items.length>0)
      this.items.splice(this.items.length-1, 1);
  }
  toggleRotate() {
    this.rotate = this.rotate==='left' ? 'right' : 'left';
  }
  removeAll() {
    for(let i=this.items.length-1;i>=0;i--){
      timer(200*(this.items.length-i)).pipe(take(1))
        .subscribe(() => this.items.splice(i, 1));
    }

  }
  animateText() {
    this.animText++;
  }
  shake() {
    this.shakeAnim++;
  }
}

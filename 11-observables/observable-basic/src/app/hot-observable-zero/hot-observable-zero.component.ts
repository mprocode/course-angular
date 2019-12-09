import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Observer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-hot-observable-zero',
  templateUrl: './hot-observable-zero.component.html',
  styleUrls: ['./hot-observable-zero.component.css']
})
export class HotObservableZeroComponent implements OnInit {

  @ViewChild('myButton')  button: ElementRef;

  private n1: number = 0;
  private s1: string = '';
  private n2: number = 0;
  private s2: string = '';

  constructor() { }

  ngOnInit() {
    
    // Um observable é hot se o produtor de notificacoes nao é criado cada vez
    // que um observer se inscreve ao observable

    // Exemplo de hot observable utilizando o fromEvent
    let myButtonClickObservable : Observable<number> = fromEvent(this.button.nativeElement, 'click');
    // Começa a logar somente depois de 5 seg
    setTimeout(() => {
      myButtonClickObservable.subscribe((event)=> console.log("button clicked 1") );
      myButtonClickObservable.subscribe((event)=> console.log("button clicked 2") );
    }, 5000);

    // Nosso produtor ficará fora do Observable
    class Producer {
      private intervalID;
      private mylisteners = [];
      private n = 0;
      
      start() {
        this.intervalID = setInterval(()=>{
          this.n++;
          console.log('From Producer: ' + this.n);
          for(let l of this.mylisteners) 
            l(this.n);
        }, 1000) 
      };
      addListener(l) { 
        this.mylisteners.push(l);;
      }
      stop() { 
        clearInterval(this.intervalID); 
      }
    }

    let producer = new Producer();
    producer.start();
    /*
    setTimeout( ()=> {
        producer.addListener((n)=>{console.log('From listener 1: ' + n)});
        producer.addListener((n)=>{console.log('From listener 2: ' + n)});
      }, 5000);
    */
    const myIntervalObservable = new Observable(
      (observer: Observer<number>) => producer.addListener(
        (n)=> observer.next(n)
      )
    );
    //setTimeout( ()=> {
    myIntervalObservable.subscribe((n) => console.log('From subscriber 1: ' + n));
    myIntervalObservable.subscribe((n) => console.log('From subscriber 2: ' + n));
    //}, 5000);
  }


}

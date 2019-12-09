import { Component, OnInit } from '@angular/core';
import { Observer, Observable, ConnectableObservable, Subject } from 'rxjs';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publish';


@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html',
  styleUrls: ['./hot-observable.component.css']
})
export class HotObservableComponent implements OnInit {
  
  private n1: number = 0;
  private s1: string = '';
  private n2: number = 0;
  private s2: string = '';
  private n: number = 0;

  private myObservable;
  constructor() { }

  usingSubjects() {
    // ----------------------------------------------------------------------------------------------------------        
    
    // Utilizando Subjects
    const subject = new Subject<number>();

    // Conectando o subject ao observable
    // Nesse momento o observable será criado
    this.myObservable.subscribe(subject);

    // Subscriber 1
    this.s1 = "waiting for interval...";
    setTimeout(() => {
      subject.subscribe(
        (_n) => {this.n1 =_n; this.s1 = "OK! ";}
      );
    }, 3000);
  
    // Subscriber 2
    this.s2 = "waiting for interval...";
    setTimeout(() => {
      subject.subscribe(
        (_n) => {this.n2 =_n; this.s2 = "OK! ";}
      );
      //myObservable.subscribe(subject);      
    }, 5000);
    
  }

  usingPublish() {

    // ----------------------------------------------------------------------------------------------------------
    // Utilizando publish / refCount() 
    // Quando o primeiro o primeiro subscriber se inscrever, o observable sera criado
    // Ou seja, o observer interno se inscreverá no observable destino
    // The publish operator is a thin wrapper around the multicast operator. It calls multicast, passing a Subject.

    //const multicasted : Observable<number> = this.myObservable.publish().refCount();

    // Utilizando publish / connect() ()
    // Utilizo  connect para dizer quando o observer interno ser inscreverá no 
    // observable destino, iniciando assim o stream de dados
    const multicasted : ConnectableObservable<number> = this.myObservable.publish();

    // Connect the subject to the observable.
    //multicasted.connect();

    // Subscriber 1
    this.s1 = "waiting for interval...";
    setTimeout(() => {
      multicasted.subscribe(
        (_n) => {this.n1 =_n; this.s1 = "OK! ";}
      );
    }, 3000);
  
    // Subscriber 2
    this.s2 = "waiting for interval...";
    setTimeout(() => { 
      multicasted.subscribe(
        (_n) => {this.n2 =_n; this.s2 = "OK! ";}
      );
      multicasted.connect();
    }, 7000);
  }

  usingShare() {
    // Utilizando share
    // The share operator is similar to using the publish operator and calling refCount. 
    // Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
    // Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
    // unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.    
    const myIntervalObservable = this.myObservable.share();
    
    // Connect the subject to the observable.

    // Subscriber 1
    this.s1 = "waiting for interval...";
    setTimeout(() => {
      myIntervalObservable.subscribe(
        (_n) => {this.n1 =_n; this.s1 = "OK! ";}
      );
    }, 3000);
  
    // Subscriber 2
    this.s2 = "waiting for interval...";
    setTimeout(() => {
      myIntervalObservable.subscribe(
        (_n) => {this.n2 =_n; this.s2 = "OK! ";}
      );
    }, 5000);

  }

  ngOnInit() {

    this.myObservable = new Observable( 
        (observer: Observer<any>) => {
          console.log('%c Observable Created!', 'background: #cccccc; color: #ff0000');
          let i: number = 0;
          setInterval(()=> {
            i++; this.n++;
            (i == 100) ? observer.complete() : observer.next(i);
          }, 1000);
        });
    
    //this.usingSubjects();
    this.usingPublish();
    //this.usingShare();
  }

}

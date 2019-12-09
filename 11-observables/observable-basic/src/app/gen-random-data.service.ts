import { Injectable } from '@angular/core';
import { Observable, Observer, ConnectableObservable } from 'rxjs';
import { DataModel } from './datamodel';

@Injectable({
  providedIn: 'root'
})
export class GenRandomDataService {
  public dataObservable: ConnectableObservable< DataModel >;
  constructor() {
    console.log("GenRandomDataService created");
 
    this.dataObservable = new Observable(
      (observer: Observer<DataModel>) => {
        let n = 0;
        console.log("Observable created");
        let f = () => {
          n++;
          console.log(n);
          if (n < 10) {
            let timestamp = Math.random() * 2000 + 500;
            observer.next({timestamp: Math.round(timestamp), data: n});
            setTimeout(()=>{
              f();
            }, timestamp);
          }
          else
            observer.complete();
        }
        f();
      }
    ).publish();
  }
}

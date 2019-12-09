import { Injectable } from '@angular/core';
import { Electronic } from '../models/electronic.model';
import { Observable, Subject, timer, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  electronicsSubj: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  electronics$: Observable<Electronic[]> = this.electronicsSubj.asObservable();

  constructor() { 
    timer(2000)
      .subscribe(() => {
        this.electronicsSubj.next([
          { name: "Headphone", brand: "Bose", price: 200, description: "Noise cancelling" },
          { name: "Portable HD", brand: "Samsung", price: 100, description: "2TB Hard disk" },
          { name: "Monitor 23\"", brand: "AOC", price: 200, description: "HDMI/VGA" },
          { name: "Processor i7-8700K ", brand: "Intel", price: 400, description: "12 MB Cache" },
          { name: "Mouse wireless", brand: "Logitech", price: 50, description: "For Gamers" },
        ])
      })
  }  

  get(index: number): Observable<Electronic> {
    let electronics = this.electronicsSubj.getValue();
    if (index < electronics.length) {
      return of(electronics[index]);
    }
    return of(null);
  }  
  
}



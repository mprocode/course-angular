import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, of, Observable } from 'rxjs';
import { Dvd } from '../models/dvd.model';
import { timeout, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvdSubject.asObservable();

  constructor() { 
    timer(2000)
      .subscribe(() => {
        this.dvdSubject.next([
          { title: "DVD - Beegees", year: 2016, genre: "Music" },
          { title: "The wind", year: 2018, genre: "Movie"}
        ])
      })
  }

  add(d: Dvd) {
    let dvds = this.dvdSubject.getValue();
    dvds.push(d);
    this.dvdSubject.next(dvds);
  }

  remove(index: number) {
    let dvds = this.dvdSubject.getValue();
    dvds.splice(index, 1);
    this.dvdSubject.next(dvds);
  }

  get(index: number): Observable<Dvd> {
    let dvds = this.dvdSubject.getValue();
    if (index < dvds.length) {
      console.log("dentro get: " + index);
      return of(dvds[index]).pipe(delay(2000));
    }
    return of(null);
  }
}

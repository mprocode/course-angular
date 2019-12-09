import { Injectable } from '@angular/core';
import { Person } from './person';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  private people : Person[] = [];
  private subPeople: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>(this.people);
  private people$ = this.subPeople.asObservable();

  constructor() { }

  add(p: Person) {
    this.subPeople.value.push(p);
  }
  update(p: Person) {
    let i = this.subPeople.value.findIndex(person=>person._id == p._id);
    if (i>=0)
      this.subPeople.value[i] = p;
  }
  delete(id){
    let i = this.subPeople.value.findIndex(person=>person._id == id);
    if (i>=0)
      this.subPeople.value.splice(i,1);
  }
  all() {
    return this.people$;
  }
}

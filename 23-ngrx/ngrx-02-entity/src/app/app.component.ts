import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import * as faker from 'faker';
import { PersonNew, PersonUpdate, PersonDelete } from './store/person.actions';
import * as fromPerson from './store/person.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people$: Observable<Person[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    //this.people$ = this.store.pipe(select('people'));
    //this.store.pipe(select('people')).subscribe((p)=>console.log(p));
    this.people$ = this.store.select(fromPerson.selectAll);
  }

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random()*100),
      _id: new Date().getMilliseconds().toString()
    };
    this.store.dispatch(new PersonNew({person}));
  }

  update(person: Person) {
    person.address = faker.address.streetAddress();
    person.city = faker.address.city();
    person.country = faker.address.country();
    person.age = Math.round(Math.random()*100);
    //this.store.dispatch(new PersonUpdate({person}));
    this.store.dispatch(new PersonUpdate({id: person._id, changes: person}));
  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({id: p._id}));
  }

}

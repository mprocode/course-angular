import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Person} from '../person';
import {MainService} from '../main.service';

import * as faker from 'faker' ;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people$: Observable<Person[]> = this.mainService.getPeople();

  constructor(private mainService: MainService) { 
  }

  ngOnInit() {
  }

  addOne() {
    const p: Person = {
      name: faker.name.findName(),
      age: faker.random.number({ min: 18, max: 99 }),
      country: faker.address.country(),
      email: faker.internet.email(),
      company: faker.company.companyName()
    }
    this.mainService.addPerson(p);
  }  

  generate() {
    for(let i=0; i<5; i++)
      this.addOne();
  }

}

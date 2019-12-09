import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Person} from './person';
import {catchError, tap} from 'rxjs/operators';
import {Product} from './product';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  private peopleCollection: AngularFirestoreCollection<Person> = this.afs.collection('people');

  constructor(private afs: AngularFirestore) { }

  getPeople(): Observable<Person[]> {
    return this.peopleCollection.valueChanges();
  }

  addPerson(p: Person) {
    return this.peopleCollection.add(p);
  }


}

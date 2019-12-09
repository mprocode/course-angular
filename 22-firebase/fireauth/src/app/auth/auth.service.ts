import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {BehaviorSubject, Observable, of, Subject, throwError} from 'rxjs';
import {catchError, map, tap, switchMap} from 'rxjs/operators';
import {AuthModule} from './auth.module';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {from} from 'rxjs';
import { error } from '@angular/compiler/src/util';

import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<User> = this.afs.collection('users');
 
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth) { }

  register(user: User): Observable<boolean> {
    return from(this.afAuth.auth
      .createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password))
      .pipe(
        switchMap((u: firebase.auth.UserCredential) => 
          this.userCollection.doc(u.user.uid)
            .set({...user, id: u.user.uid})
            .then(() => true)
        ),
        catchError((err) => throwError(err))
      ) 
  }

  login(email: string, password: string): Observable<User> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
      .pipe(
        switchMap((u)=>this.userCollection.doc<User>(u.user.uid).valueChanges()),
        catchError(()=> throwError('Invalid credentials or user is not registered.')))
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(map((u)=>(u)?true:false));
  }

  getUser(): Observable<User> {
    return this.afAuth.authState
      .pipe(
        switchMap((u)=> 
          (u) ? this.userCollection.doc<User>(u.uid).valueChanges() : of(null)));
  }

  async updateUserData(u: auth.UserCredential ) {
    try {
      const user: User = {
        firstname: u.user.displayName,
        lastname: '', address: '', city: '', state: '',
        phone: '', mobilephone: '',
        email: u.user.email,
        id: u.user.uid
      };    
      await this.userCollection.doc(u.user.uid).set(user);
      return user;
    }    
    catch(e) { throw new Error(e) }
  }

  async loginWithGoogleAcount() {
    try {
      const provider = new auth.GoogleAuthProvider();
      let credentials: auth.UserCredential = await this.afAuth.auth.signInWithPopup(provider);
      let user: User = await this.updateUserData(credentials);
      return user;
    }
    catch(e) {
      throw new Error(e);
    }
  }

  loginGoogle() : Observable<User>  {
    return from(this.loginWithGoogleAcount());
  }


  loginGoogle2() : Observable<User>  {
    const provider = new auth.GoogleAuthProvider();
    return from(this.afAuth.auth.signInWithPopup(provider))
      .pipe(
        tap((data) => console.log(data)),
        switchMap((u: auth.UserCredential) => {
          const user: User = {
            firstname: u.user.displayName,
            lastname: '', address: '', city: '', state: '',
            phone: '', mobilephone: '',
            email: u.user.email,
            id: u.user.uid
          };
          console.log(user);
          return this.userCollection.doc(u.user.uid)
            .set(user).then(() => user)
        }),
        catchError((e) => throwError(e))
      )
  }

}

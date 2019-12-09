import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {BehaviorSubject, Observable, of, Subject, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {AuthModule} from './auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subjUser: BehaviorSubject<User> = new BehaviorSubject(null);
  private user$ = this.subjUser.asObservable();
  private subLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private isLoggedIn$ = this.subLoggedIn.asObservable();

  private readonly auth_url = 'http://localhost:9000/auth';

  constructor(private http: HttpClient) {

  }

  register(user: User): Observable<User> {
    return this.http.post<User>(
      'http://localhost:9000/auth/register', user);
  }

  login(credentials: {email: string, password: string}): Observable<User> {
    return this.http.post<User>(
      'http://localhost:9000/auth/login',
      credentials)
      .pipe(
        tap( (u: User) => {
          localStorage.setItem('token', u.token);
          this.subjUser.next(u);
          this.subLoggedIn.next(true);
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err.error.message);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.subjUser.next(null);
    this.subLoggedIn.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!this.subLoggedIn.value && token) {
      return this.checkTokenValidation();
    }
    return this.isLoggedIn$;
  }

  checkTokenValidation(): Observable<boolean> {
    console.log('checkTokenValidation()');
    return this.http
      .get<User>(`${this.auth_url}/user`)
      .pipe(
        tap((u: User) => {
          console.log('checkTokenValidation()', u);
          localStorage.setItem('token', u.token);
          this.subjUser.next(u);
          this.subLoggedIn.next(true);
        }),
        map( (u: User) => (u) ? true : false),
        catchError((err) => {
          this.logout();
          return of(false);
        })
      );
  }

  getUser(): Observable<User> {
    return this.user$;
  }
}

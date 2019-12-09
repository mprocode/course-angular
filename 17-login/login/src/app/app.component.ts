import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';
import {User} from './auth/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private authenticated$: Observable<boolean>;
  private user$: Observable<User>;

  constructor(
    private authService: AuthService,
    private router: Router) {

    this.authenticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();

    // this.authenticated.subscribe((b) => console.log('autenticado: ', b));
    // this.user.subscribe((u) => console.log('user: ', u));
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}

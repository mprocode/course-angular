import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
      private router: Router,
      private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log('activate');
      return this.authService.isAuthenticated()
        .pipe(tap(b => {
          console.log(b);
          if (!b) {
            this.router.navigateByUrl('/auth/login');
          }
        }));
    }
}

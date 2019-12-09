
import {HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Injectable, Injector} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
      private router: Router,
      private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('interceptor');
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            const authReq = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
            console.log(authReq);
            return next.handle(authReq)
              .pipe(catchError((err) => {
                console.log(err);
                if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                    this.authService.logout();
                    this.router.navigateByUrl('/auth/login');
                    console.log('erro 401');
                  }
                }
                return throwError(err);
              }));
        }
        return next.handle(req);
    }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { last, first } from 'rxjs/operators';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm =  this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email]],
      'password': ['', [
        Validators.required,
        Validators.minLength(6)]]
    });
  }

  private loginOkNotification(u: User) {
    this.snackBar.open(
      'Logged in successfully. Welcome ' + u.firstname + '!',
      'OK', { duration: 2000 });
  }

  private loginErrorNotification(err) {
    this.snackBar.open(err,
      'OK', { duration: 2000 });
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        u => {
          this.loginOkNotification(u);
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        err => {
          this.loginErrorNotification(err);
          this.loading = false;
        });
  }

  loginGoogle() {
    this.loading = true;
    this.authService.loginGoogle()
      .subscribe(
        u => {
          this.loginOkNotification(u);
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        err => {
          this.loginErrorNotification(err);
          this.loading = false;
        });    
  }
}

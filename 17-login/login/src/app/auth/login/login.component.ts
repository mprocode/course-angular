import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

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

  onSubmit() {
    console.log('onSubmit()');
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.loading = true;
    this.authService.login(credentials)
      .subscribe(
        value => {
          console.log(value);
          this.snackBar.open(
            'Logged in successfully. Welcome ' + value.firstname + '!',
            'OK', { duration: 2000 });
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        err => {
          console.log(err);
          this.snackBar.open(err,
            'OK', { duration: 2000 });
          this.loading = false;
        });
  }
}

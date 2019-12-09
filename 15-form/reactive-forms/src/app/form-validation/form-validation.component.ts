import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  clientForm = this.fb.group({
    firstName: ['', [
      Validators.required,
      Validators.minLength(5)]
    ],
    lastName: ['', Validators.required],
    birth: [new Date(), Validators.required
    ],
    age: [0, [
      Validators.required,
      Validators.max(150),
      Validators.min(0) ]
    ],
    email: ['', [
      Validators.required,
      Validators.email]
    ],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2),]
    ],
    phone1: ['', Validators.required],
    phone2: ['', Validators.required], 
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {

  }

}

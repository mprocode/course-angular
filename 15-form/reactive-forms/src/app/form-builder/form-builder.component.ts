import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  /*
  clientForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    name: new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
    })
  });
  */
  
  clientForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.clientForm.value);
    console.log(`
      Name: ${this.clientForm.value.firstName}
      Last Name: ${this.clientForm.value.lastName}
    `);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl('');

  setFirstName() {
    this.firstName.setValue("New Name");
  }

  ngOnInit() {
    this.firstName.valueChanges
      .subscribe(newName => console.log(newName));
  }

}

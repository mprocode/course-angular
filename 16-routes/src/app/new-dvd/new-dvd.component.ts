import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DvdService } from '../services/dvd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-dvd',
  templateUrl: './new-dvd.component.html',
  styleUrls: ['./new-dvd.component.css']
})
export class NewDvdComponent implements OnInit {

  formDvd = this.fb.group({
    'title': [''],
    'year': [''],
    'genre': ['']
  });

  constructor(
    private fb: FormBuilder, 
    private dvdService: DvdService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dvdService.add(this.formDvd.value);
    this.router.navigate(['/dvds']);
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }

}

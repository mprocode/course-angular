import { Component, OnInit } from '@angular/core';
import { DvdService } from '../services/dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  private dvds$: Observable<Dvd[]>;

  constructor(
    private dvdService: DvdService,
    private router: Router) { 
    this.dvds$ = dvdService.dvds$;
  }

  ngOnInit() {

  }

  remove(i: number) {
    this.dvdService.remove(i);
  }

  // Parametros opcionais
  goDetails(i: number, title: string) {
    this.router.navigate(["dvds/"+i, {title: title}]);
  }
  
}

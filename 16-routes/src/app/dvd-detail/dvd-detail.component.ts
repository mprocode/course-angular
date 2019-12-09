import { Component, OnInit } from '@angular/core';
import { DvdService } from '../services/dvd.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd.model';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  dvd$: Observable<Dvd>;

  // Parametros opcionais
  title: string = null;

  constructor(
    private dvdService: DvdService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log("DvdDetailComponent: ngOnInit");

    this.route.paramMap
      .pipe(
        tap((params: ParamMap) => console.log("Index: " + params.get('index')))
      )
      .subscribe();

    this.dvd$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.dvdService.get( +params.get('index') ))
      );

    // Parametros opcionais
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        if(params.has("title"))
          this.title = params.get("title");
      });

  }

  goBack() {
    this.router.navigate(['/dvds']);
  }

}

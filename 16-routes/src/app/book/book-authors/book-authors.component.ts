import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, tap, toArray } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.css']
})
export class BookAuthorsComponent implements OnInit {

  authors$: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    /*
    this.authors$ = this.route.paramMap.pipe(
      switchMap( (params: ParamMap) => of( params.get("authors") ) )
    );*/
    console.log("aqui 1");

    this.authors$ = this.route.paramMap.pipe(
      switchMap( (params: ParamMap) =>  of(params.get("authors").split(",") ) ) ) ;

    let v = this.route.paramMap.pipe(
      toArray()
     );
    v.subscribe((v) => console.log);

  }

}

import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book> = null;
  authors: string[];
  index: number;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router) { }

  ngOnInit() {

    // Explicar que a instancia do componente é reutilizada, entao
    // o ngOnInit eh chamado uma unica vez, por isso nao podemos
    // utilizar o snapshot, a nao ser que esse componente nao fosse reutilizado
    console.log("BookDetailComponent: ngOnInit");
    console.log("Index: " + this.route.snapshot.paramMap.get('index'));

    this.book$ = this.route.paramMap
      .pipe(
        tap((params: ParamMap) => console.log("Index: " + params.get("index") ) ),
        tap((params: ParamMap) => this.index = + params.get("index") ),
        switchMap((params: ParamMap) => this.bookService.get( +params.get("index") ) )
      )
      .pipe(tap((b: Book) => this.authors = b ? b.authors : []));
  }

  goAuthors() {
    let url = "/books/" + this.index + "/authors";
    this.router.navigate([url, {authors: this.authors}]);
  }


  remove() {
    this.bookService.remove(this.index);
    this.router.navigate(["books"]);
  }  


}

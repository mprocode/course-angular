import { Injectable } from '@angular/core';
import { ReplaySubject, timer, BehaviorSubject, from, Observable, of } from 'rxjs';
import { Book } from '../models/book.model';
import { timeout, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksSubject : BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.booksSubject.asObservable();

  constructor() { 
    timer(2000)
      .subscribe(v => this.booksSubject.next([
          {title: "Book 1", pages: 200, authors: ["john","nicole"]},
          {title: "Book 2", pages: 100, authors: ["mily"]},
          {title: "Book 3", pages: 300, authors: ["fred"]},
          {title: "Book 4", pages: 230, authors: ["ane", "peter", "samuel"]},
          {title: "Book 5", pages: 130, authors: ["paul", "john"]},          
      ]));
  }

  add(b : Book) {
    let books = this.booksSubject.getValue();
    books.push(b);
    timer(2000)
      .subscribe(() => this.booksSubject.next(books));
  }

  remove(index: number) {
    let books = this.booksSubject.getValue();
    books.splice(index, 1);
    timer(2000)
      .subscribe(() => this.booksSubject.next(books));
  }

  get(index: number): Observable<Book> {
    let books = this.booksSubject.getValue();
    if (index < books.length) {
      return of(books[index]).pipe(delay(1000));
    }
    return of(null);
  }  
}

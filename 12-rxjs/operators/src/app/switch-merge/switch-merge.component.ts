import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, map, mergeAll, switchMap, mergeMap, switchAll, debounceTime } from 'rxjs/operators';
import { Person } from './person.model';

@Component({
  selector: 'app-switch-merge',
  templateUrl: './switch-merge.component.html',
  styleUrls: ['./switch-merge.component.css']
})
export class SwitchMergeComponent implements OnInit {

  @ViewChild('searchBy') el : ElementRef;
  private searchInput: string = '';
  private readonly url: string = "http://localhost:9000";
  private people$: Observable<Person[]>;

  // importar modulo HttpModule
  constructor(private http: HttpClient) { }

  filterPeople(searchInput: string) : Observable<Person[]> {
    if (searchInput.length===0)
      return of([]);
    return this.http.get<Person[]>(`${this.url}/${searchInput}`);
  }

  firstOption() {
    fromEvent(this.el.nativeElement, 'keyup')
      .subscribe((event)=> { 
        // console.log(event);
        this.http.get(`${this.url}/${this.searchInput}`)
        //this.filterPeople(this.searchInput)
          .subscribe(
            (data) => console.log(data)
          )
      });

    /* While it works fine, there are two drawbacks to the code above.
    1. It’s starting to look like callback hell. 
    2. We need to handle the disposal of every subscription by ourselves.
    Let’s see how higher order observables make things easier for us. 
    A higher order observable is just a fancy name for an observable that emits observable.*/      
  }

  secondOption() {
    let keyup$ = fromEvent(this.el.nativeElement, 'keyup'); // outer
    
    // Primeiro isso
    //let fetch$ = keyup$.pipe(map( () => this.filterPeople(this.searchInput)));
    //fetch$.subscribe((data) => console.log(data))

    // Segundo isso
    //let fetch$ = keyup$.pipe(map( () => this.filterPeople(this.searchInput).subscribe((data)=>console.log(data))));
    //fetch$.subscribe();

    // Terceiro isso
    //let fetch$ = keyup$.pipe(map( () => this.filterPeople(this.searchInput)));
    //fetch$
    //  .pipe(mergeAll())
    //  .subscribe((data) => console.log(data))

    // Quarto isso
    let fetch$ = keyup$.pipe(mergeMap( () => this.filterPeople(this.searchInput)));
    //fetch$.subscribe((data) => console.log(data));
    this.people$ = fetch$;    
  }

  thirdOption() {
    let keyup$ = fromEvent(this.el.nativeElement, 'keyup'); // outer
    
    // Primeiro isso
    //let fetch$ = keyup$.pipe(map( () => this.filterPeople(this.searchInput)));
    //this.people$ = fetch$.pipe(switchAll());

    // Segundo isso    
    //let fetch$ = keyup$.pipe(switchMap( () => this.filterPeople(this.searchInput)));
    //this.people$ = fetch$;

    // Terceiro isso    
    let fetch$ = keyup$
      .pipe(
        debounceTime(700),  // evitando que requisicoes sejam enviadas
        switchMap( () => this.filterPeople(this.searchInput)));
    this.people$ = fetch$;

  }

  ngOnInit() {
    //this.firstOption();
    //this.secondOption();
    this.thirdOption();
  }

}

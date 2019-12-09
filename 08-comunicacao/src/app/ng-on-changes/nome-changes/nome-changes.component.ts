import { Component, OnInit, Input, OnChanges, SimpleChange  } from '@angular/core';

@Component({
  selector: 'app-nome-changes',
  templateUrl: './nome-changes.component.html',
  styleUrls: ['./nome-changes.component.css']
})

// adicionar OnChanges =>
export class NomeChangesComponent implements OnInit, OnChanges {

  @Input() nome: string;
  nomeAntes: string;

  // @Input() sobrenome: string; // para testar duas modificacoes no SimpleChange

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(changes);
    if (changes.hasOwnProperty('nome')) {
      let change = changes['nome'];
      this.nomeAntes = change.previousValue;
    }
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent implements OnInit {

  nomeAtual: string;
  nome: string;

  constructor() { }

  ngOnInit() {
  }

  atualizaNomeClick() {
    this.nome = this.nomeAtual;
  }
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.css']
})
export class NgForComponentComponent implements OnInit {

  nomes: String[] = [ 
    "Ana Silva",
    "Abel Soares",
    "Leonidas",
    "Mariel Souza"
  ];

  cidades: any[] = [
    { nome: "São Paulo", uf: "SP"},
    { nome: "Porto Alegre", uf: "RS"},
    { nome: "Curitiba", uf: "PR"},
    { nome: "Belo Horizonte", uf: "MG"},
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-formulario',
  templateUrl: './ng-for-formulario.component.html',
  styleUrls: ['./ng-for-formulario.component.css']
})
export class NgForFormularioComponent implements OnInit {

  nome: String = '';
  endereco: String = '';
  telefone: String = '';
  idade: Number = 0;

  clientes: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  clearFields() {
    this.nome = '';
    this.endereco = '';
    this.telefone = '';
    this.idade = 0;
  }

  save() {
    this.clientes.push({
      nome: this.nome,
      endereco: this.endereco,
      telefone: this.telefone,
      idade: this.idade
    });
    this.clearFields();
  }

  delete(i: number) {
    this.clientes.splice(i, 1);
  }

}

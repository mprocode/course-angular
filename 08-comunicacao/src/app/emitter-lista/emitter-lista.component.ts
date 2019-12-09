import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';

@Component({
  selector: 'app-emitter-lista',
  templateUrl: './emitter-lista.component.html',
  styleUrls: ['./emitter-lista.component.css']
})
export class EmitterListaComponent implements OnInit {

  nome: string = "";
  idade: number = 0;
  clientes: Cliente[] = [];
  nextID : number = 1;

  constructor() { }

  novoCliente() {
    this.clientes.push(
      new Cliente(
        this.nextID++, this.nome, this.idade
      )
    );
    this.nome = "";
    this.idade = 0;
  }

  apagarCliente(id: number) {
    let i = this.clientes.findIndex(((c) => c.id == id));
    if (i >= 0 && i < this.clientes.length)
      this.clientes.splice(i, 1);
  }

  salvarCliente(novoCliente: Cliente) {
    let c = this.clientes.find(((c) => c.id == novoCliente.id));
    c.idade = novoCliente.idade;
    c.nome = novoCliente.nome;
  }

  ngOnInit() {
  }

}

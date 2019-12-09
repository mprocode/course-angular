import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-item-cliente',
  templateUrl: './item-cliente.component.html',
  styleUrls: ['./item-cliente.component.css']
})
export class ItemClienteComponent implements OnInit {

  @Input() cliente: Cliente;
  @Output() salvarCliente = new EventEmitter<Cliente>();
  @Output() apagarCliente = new EventEmitter<number>();

  onEdit : boolean = false;
  novoNome: string;
  novaIdade: number;

  constructor() { }

  ngOnInit() {
  }

  editarClick() {
    this.onEdit = true;
    this.novoNome = this.cliente.nome;
    this.novaIdade = this.cliente.idade;
  }

  salvarClick() {
    this.onEdit = false;
    this.salvarCliente.emit(
      new Cliente(this.cliente.id, this.novoNome, this.novaIdade)
    );
  }

  apagarClick() {
    this.apagarCliente.emit(this.cliente.id);
  }

}

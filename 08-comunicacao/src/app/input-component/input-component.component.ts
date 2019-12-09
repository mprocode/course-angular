import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  @Input() nome: String;
  @Input('sobrenome') snome: String;
  @Input('idadepessoa') idade: Number;

  private cli: Cliente;

  private clientes: Cliente[];

  constructor() {
    this.cli = new Cliente(1, "Maria", "Av. Estado, 4000", 50);

    this.clientes = [
      new Cliente(1, "Maria", "Av. Estado, 4000", 50),
      new Cliente(2, "Jose", "Av. Estado, 4000", 30),
      new Cliente(3, "Adriano", "Av. Estado, 4000", 40),
      new Cliente(4, "Ronaldo", "Av. Estado, 4000", 70)
    ];
  }

  ngOnInit() {
  }

}

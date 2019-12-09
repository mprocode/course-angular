import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  nome: string;
  sobrenome: string  = "Silva";

  cliente: Cliente;

  constructor() { 
    this.nome = "Jose";
    this.cliente = new Cliente('Joao', 'Silva', 'Av. Brasil', 45);
  }

  ngOnInit() {
  }

}

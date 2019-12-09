import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  cliente: Cliente;

  constructor() { 
    this.cliente = new Cliente('', '', '', 0);
  }

  ngOnInit() {
  }

}

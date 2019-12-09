import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.css']
})
export class ClientComponentComponent implements OnInit {

  @Input('cliente') cliente: Cliente;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  valor: number = 0;

  constructor() { }

  incBy(i: number) {
    this.valor = this.valor + i;
  }

  ngOnInit() {
  }

}

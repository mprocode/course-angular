import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.css']
})
export class NomeComponent implements OnInit {

  private _nome = '';
 
  @Input()
  set nome(nome: String) {
    this._nome = "Seu nome: " + ( (nome && nome.trim()) || '<sem nome>' );
  }
 
  get nome(): String { 
    return this._nome;
  }  

  constructor() { }

  ngOnInit() {
  }

}

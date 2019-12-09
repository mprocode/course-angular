import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  templateUrl: './ng-if-component.component.html',
  styleUrls: ['./ng-if-component.component.css']
})
export class NgIfComponentComponent implements OnInit {

  showNome: Boolean = false;
  showEndereco: Boolean = false;
  showTelefone: Boolean = false;
  showIdade: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

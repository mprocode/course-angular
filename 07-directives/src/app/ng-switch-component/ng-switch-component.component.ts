import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-component',
  templateUrl: './ng-switch-component.component.html',
  styleUrls: ['./ng-switch-component.component.css']
})
export class NgSwitchComponentComponent implements OnInit {

  component: String = "botao";
  constructor() { }

  ngOnInit() {
  }

}

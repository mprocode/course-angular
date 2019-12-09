import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-component',
  templateUrl: './ng-style-component.component.html',
  styleUrls: ['./ng-style-component.component.css']
})
export class NgStyleComponentComponent implements OnInit {

  cor: String = "green";
  fonte:  String = "20px";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-component',
  templateUrl: './ng-class-component.component.html',
  styleUrls: ['./ng-class-component.component.css']
})
export class NgClassComponentComponent implements OnInit {

  classe: String = "classe0";

  constructor() { }

  ngOnInit() {
  }

}

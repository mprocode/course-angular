import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  constructor() { }

  users: any[] = [ 
    {login: 'bob', role: 'admin', lastlogin: new Date('2/1/18')},
    {login: 'lia', role: 'user', lastlogin: new Date('6/30/18')},
    {login: 'john', role: 'admin', lastlogin: new Date('8/1/18')},
    {login: 'robin', role: 'user', lastlogin: new Date('8/1/18')},
  ];

  ngOnInit() {
  }

}

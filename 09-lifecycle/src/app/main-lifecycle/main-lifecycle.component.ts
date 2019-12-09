import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  private foods: string[] = ["Rice", "Beans", "Pizza"];
  private clients: Client[] = [];

  private name: string;
  private age: number;
  private food: string;

  private editClient: Client = null;

  private randomNumber : number;

  constructor() { 
    this.genRandomNumber();    
  }

  genRandomNumber() {
    this.randomNumber = Math.round(Math.random() * 1000);
  }
  
  ngOnInit() {
  }

  salvar() {
    if (this.editClient != null) {
      this.editClient.name = this.name;
      this.editClient.age = this.age;
      this.editClient.food = this.food;
      this.editClient = null;
    }
    else {
      this.clients.push(
        new Client(
          this.name,
          this.age,
          this.food
        ));
    }
    this.age = 0;
    this.name = '';
    this.food = null;
  }

  edit(cli: Client) {
    this.editClient = cli;
    this.name = this.editClient.name;
    this.age = this.editClient.age;
    this.food = this.editClient.food;
  }

  delete(cli: Client) {
    let idx = this.clients.findIndex((c) => c == cli);
    this.clients.splice(idx, 1);
  }

}

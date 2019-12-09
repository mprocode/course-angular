import { Component, OnInit } from '@angular/core';

class Client {
  constructor(
    private firstName: string,
    private lastName: string,
    private birth: Date,
    private gender: string,
    private street: string,
    private city: string,
    private state: string,
    private phone1: string,
    private phone2: string) {}

}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  states = [ "SP", "PR", "SC", "RS", "PA", "RO"];
  
  client: Client = new Client("", "", new Date(), "", "", "", "", "", "");

  onSubmit() {
    console.log("Submit: ", this.client);
  }

  ngOnInit(){

  }
  
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  cor: String = 'accent';
  cores: string[] = ['primary','accent','warn'];
  idx: number = 0;
  btnEnabled: Boolean = false;
  
  constructor() { }

  ngOnInit() {
    setInterval( 
      ()=> this.idx = (this.idx+1) % this.cores.length,
      500);
  }

}

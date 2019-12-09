import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit {

  @Input() name: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child Child - ' + this.name + ' - ngOnChanges')
  }

  ngOnInit() {
    console.log('Child Child - ' + this.name + ' - ngOnInit')
  }

  ngAfterContentInit() {
    console.log('Child Child - ' + this.name + ' - ngAfterContentInit')
  }
}

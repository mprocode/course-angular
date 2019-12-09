import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input('item') item : string;
  @Output() maisUm = new EventEmitter<any>();
  @Output() maisDois = new EventEmitter<any>();
  @Output() menosUm = new EventEmitter<any>();
  @Output() menosDois = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  maisUmClick() {
    this.maisUm.emit();
  }

  maisDoisClick() {
    this.maisDois.emit();
  }

  menosUmClick() {
    this.menosUm.emit();
  }

  menosDoisClick() {
    this.menosDois.emit();
  }

}

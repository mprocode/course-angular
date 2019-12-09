import { Component, OnInit } from '@angular/core';

// ViewChild
import { ViewChild } from '@angular/core';
import { CronometroComponent } from './cronometro/cronometro.component';

@Component({
  selector: 'app-comunicacao-parent-child',
  templateUrl: './comunicacao-parent-child.component.html',
  styleUrls: ['./comunicacao-parent-child.component.css']
})
export class ComunicacaoParentChildComponent implements OnInit {

  // ViewChild
  @ViewChild(CronometroComponent)
  private cronometro: CronometroComponent;

  constructor() { }

  ngOnInit() {
  }


  // ViewChild
  iniciarClick() {
    this.cronometro.start();
  }
  pararClick() {
    this.cronometro.stop();
  }
  zerarClick() {
    this.cronometro.clear();
  }


}

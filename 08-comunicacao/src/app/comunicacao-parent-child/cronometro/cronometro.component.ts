import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  private milisegundos: number = 0;
  private running: boolean = false;
  private interval: any;

  constructor() { }

  ngOnInit() {
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.interval = setInterval(() => {
        this.milisegundos+=50;
      }, 50);
    }
  }

  stop() {
    this.running = false;
    clearInterval(this.interval);
  }

  clear() {
    this.milisegundos = 0;
  }

  private round(n: number): number {
    return Math.round(n);
  }

}

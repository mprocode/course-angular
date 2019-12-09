import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  private v = [];

  addNew() {
    this.v.push('Element ' + this.v.length);
  }

  removeLast() {
    this.v.splice(this.v.length-1,1);
  }

}

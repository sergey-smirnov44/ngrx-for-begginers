import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0
  updateAt?: number;

  constructor() {}

  get cannotDec(): boolean {
    return this.counter <= 0
  }

  inc() {
    this.updateAt = Date.now()
    this.counter++
  }

  dec() {
    this.updateAt = Date.now()
    this.counter--
  }

  clear() {
    this.updateAt = Date.now()
    this.counter = 0
  }


}

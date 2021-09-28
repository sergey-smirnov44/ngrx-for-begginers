import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCounter from './reducers/counter'
import { countSelector } from './reducers/counter'
import { map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  updateAt?: number;

  count$ = this.store.select(countSelector)
  cannotDec$ = this.count$.pipe(map(count => count <= 0))

  constructor(private store: Store) {}

  get cannotDec(): boolean {
    return false
  }

  inc() {
    this.updateAt = Date.now()
    this.store.dispatch(fromCounter.inc())
  }

  dec() {
    this.updateAt = Date.now()
    this.store.dispatch(fromCounter.dec())
  }

  clear() {
    this.updateAt = Date.now()
    this.store.dispatch(fromCounter.clear())
  }


}

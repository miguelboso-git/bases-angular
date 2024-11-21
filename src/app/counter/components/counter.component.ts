import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `<p>{{counter}}</p>
  <button (click)="increaseDecreaseBy(1)">+</button>
  <button (click)="increaseDecreaseBy(-1)">-</button>
  <button (click)="resetCounter()">Reset</button>`
})
export class CounterComponent {

  public counter: number = 10;

  increaseDecreaseBy( value: number ): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}

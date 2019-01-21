import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  totalCount = 0;

  isOdd (number: number) {
    return number % 2;
  }

  onGameStarted (params: { count: number }) {
    const { count } = params;
    this.totalCount += count;
    this.isOdd(this.totalCount) ? this.oddNumbers.push(this.totalCount) : this.evenNumbers.push(this.totalCount);
  }

  resetGame () {
    this.evenNumbers = [];
    this.oddNumbers = [];
    this.totalCount = 0;
  }
}

import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{ count: number }>();
  @Output() gameReseated = new EventEmitter<{ type: string }>();
  intervalId;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.gameStarted.emit({
        count: 1
      });
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalId);
  }

  onResetGame() {
    this.gameReseated.emit({
      type: 'reset'
    });
  }

}

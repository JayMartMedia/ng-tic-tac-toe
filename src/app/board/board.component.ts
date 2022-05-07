import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares!: any[];
  xIsNext!: boolean;
  winner!: string | null;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number): void {
    // if there is already a winner, don't allow more moves
    if (this.winner) return;

    if (!this.squares[index]){
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): string | null {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    // check to see if any win conditions are met
    // if so, return winner
    for(let i = 0; i < lines.length; i+=1) {
      const [a,b,c] = lines[i];
      if(
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c] 
      ) {
        return this.squares[a];
      }
    }

    // no winner, and game is finished because no cells are empty
    if(!this.squares.includes(null)){
      return 'Tie game';
    }

    // no winner yet, and game is not yet finished, return null for winner
    return null;
  }

}

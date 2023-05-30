

export interface ScoreGame {
  game: number;
  player1Name: string;
  player1: number;
  player2Name: string;
  player2: number;
  lastWon: -1 | 0 | 1;
}
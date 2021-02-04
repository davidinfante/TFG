/**
 * Parameters of the result of an exercise
 */
export class Score {
  correctCount: number;
  failCount: number;
  omissionCount: number;
  finalScore: number;
  seconds: number;

  constructor() {
    this.correctCount = 0;
    this.failCount = 0;
    this.omissionCount = 0;
    this.finalScore = 0;
    this.seconds = 0;
  }
}

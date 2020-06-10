/**
 * Answer Button Properties
 */
export class LogicalSeriesButtons {
  id: string;
  value: string;
  backgroundColor?: string;

  constructor() {
    this.id = '';
    this.value = '';
    this.backgroundColor = '';
  }
}

/**
 * Structure of a logical series
 */
export class LogicalSeries {
  id: number;
  sampleImg: string[];
  correctOption: LogicalSeriesButtons;
  buttons: LogicalSeriesButtons[];

  /**
   * Changes the background color to green
   * if correct and to red if incorrect
   */
  changeBackgroundColor(): void {
    for (const but of this.buttons) {
      if (but.value === this.correctOption.value) {
        but.backgroundColor = '#2fdf75';
      } else {
        but.backgroundColor = '#ff4961';
      }
    }
  }
}

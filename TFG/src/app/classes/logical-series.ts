/**
 * Sample image properties
 */
export class LogicalSeriesSampleImg {
  src: string;
  height: number;
  width: number;

  constructor() {
    this.src = '';
    this.height = 0;
    this.width = 0;
  }
}

/**
 * Answer Button Properties
 */
export class LogicalSeriesButtons {
  src: string;
  height: number;
  width: number;
  value: string;
  backgroundColor?: string;

  constructor() {
    this.src = '';
    this.height = 0;
    this.width = 0;
    this.value = '';
    this.backgroundColor = '--ion-item-background';
  }
}

/**
 * Structure of a logical series
 */
export class LogicalSeries {
  id: number;
  sampleImg: LogicalSeriesSampleImg[];
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

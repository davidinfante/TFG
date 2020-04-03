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

  constructor() {
    this.src = '';
    this.height = 0;
    this.width = 0;
    this.value = '';
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
}

/**
 * Answer Button Properties
 */
export class SemanticSeriesButtons {
  title: string;
  value: string;
  backgroundColor?: string;

  constructor() {

    this.value = '';
    this.backgroundColor = '';
  }
}

/**
 * Structure of a semantic series
 */
export class SemanticSeries {
  id: number;
  correctOption: SemanticSeriesButtons;
  buttons: SemanticSeriesButtons[];

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

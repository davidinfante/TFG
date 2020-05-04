import { Injectable } from '@angular/core';
import {LogicalSeries} from '../../classes/exercises/logical-series';

@Injectable({
  providedIn: 'root'
})
export class LogicalSeriesService {
  private placeholder = {
    src: '../../../../assets/exercises/LogicalSeriesExercise/placeholder.png',
    height: 98,
    width: 98
  };
  private logicalSeries: LogicalSeries[] = [
    /**
     * Demo
     */
    {
      id: 0,
      sampleImg: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure4.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure4.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure4.png',
          height: 98,
          width: 98
        },
      ],
      correctOption: {
        src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure1.png',
        height: 98,
        width: 98,
        value: '3'
      },
      buttons: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure4.png',
          height: 98,
          width: 98,
          value: '1'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure3.png',
          height: 98,
          width: 98,
          value: '2'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure1.png',
          height: 98,
          width: 98,
          value: '3'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/demo/figure2.png',
          height: 98,
          width: 98,
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    /**
     * Exercise series
     */
    {
      id: 1,
      sampleImg: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series1/figure2.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series1/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series1/figure2.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series1/figure1.png',
          height: 98,
          width: 98
        }
      ],
      correctOption: {
        src: '../../../../assets/exercises/LogicalSeriesExercise/series1/figure2.png',
        height: 98,
        width: 98,
        value: '2'
      },
      buttons: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series1/figure1.png',
          height: 98,
          width: 98,
          value: '1'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series1/figure2.png',
          height: 98,
          width: 98,
          value: '2'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series1/figure3.png',
          height: 98,
          width: 98,
          value: '3'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series1/figure4.png',
          height: 98,
          width: 98,
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 2,
      sampleImg: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series2/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series2/figure2.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series2/figure3.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series2/figure4.png',
          height: 98,
          width: 98
        },
      ],
      correctOption: {
        src: '../../../../assets/exercises/LogicalSeriesExercise/series2/figure5.png',
        height: 98,
        width: 98,
        value: '2'
      },
      buttons: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series2/figure1.png',
          height: 98,
          width: 98,
          value: '1'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series2/figure5.png',
          height: 98,
          width: 98,
          value: '2'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series2/figure3.png',
          height: 98,
          width: 98,
          value: '3'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series2/figure6.png',
          height: 98,
          width: 98,
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 3,
      sampleImg: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure2.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure3.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure4.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure5.png',
          height: 98,
          width: 98
        },
      ],
      correctOption: {
        src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure6.png',
        height: 98,
        width: 98,
        value: '2'
      },
      buttons: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure7.png',
          height: 98,
          width: 98,
          value: '1'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure6.png',
          height: 98,
          width: 98,
          value: '2'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure3.png',
          height: 98,
          width: 98,
          value: '3'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series3/figure8.png',
          height: 98,
          width: 98,
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 4,
      sampleImg: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure2.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure3.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure4.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure5.png',
          height: 98,
          width: 98
        },
      ],
      correctOption: {
        src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure6.png',
        height: 98,
        width: 98,
        value: '2'
      },
      buttons: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure8.png',
          height: 98,
          width: 98,
          value: '1'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure6.png',
          height: 98,
          width: 98,
          value: '2'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure7.png',
          height: 98,
          width: 98,
          value: '3'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series4/figure3.png',
          height: 98,
          width: 98,
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 5,
      sampleImg: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series5/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series5/figure2.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series5/figure3.png',
          height: 98,
          width: 98
        },
      ],
      correctOption: {
        src: '../../../../assets/exercises/LogicalSeriesExercise/series5/figure5.png',
        height: 98,
        width: 98,
        value: '1'
      },
      buttons: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series5/figure5.png',
          height: 98,
          width: 98,
          value: '1'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series5/figure6.png',
          height: 98,
          width: 98,
          value: '2'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series5/figure7.png',
          height: 98,
          width: 98,
          value: '3'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series5/figure4.png',
          height: 98,
          width: 98,
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 6,
      sampleImg: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series6/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series6/figure2.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series6/figure3.png',
          height: 98,
          width: 98
        },
      ],
      correctOption: {
        src: '../../../../assets/exercises/LogicalSeriesExercise/series6/figure5.png',
        height: 98,
        width: 98,
        value: '3'
      },
      buttons: [
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series6/figure4.png',
          height: 98,
          width: 98,
          value: '1'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series6/figure6.png',
          height: 98,
          width: 98,
          value: '2'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series6/figure5.png',
          height: 98,
          width: 98,
          value: '3'
        },
        {
          src: '../../../../assets/exercises/LogicalSeriesExercise/series6/figure7.png',
          height: 98,
          width: 98,
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
  ];

  constructor() { }

  /**
   * Returns the placeholder img
   */
  getPlaceHolder() {
    return this.placeholder;
  }

  /**
   * Returns a series by it's Id
   */
  getSeries(id: number) {
    return {
      ...this.logicalSeries.find(series => {
        return series.id === id;
      })
    };
  }

  /**
   * Returns a series' sample images by it's Id
   */
  getSampleImg(id: number) {
    return [...this.getSeries(id).sampleImg];
  }

  /**
   * Returns a series' buttons by it's Id
   */
  getButtons(id: number) {
    return [...this.getSeries(id).buttons];
  }

  /**
   * Returns the correct option src/height/width of a series
   */
  getCorrectOptionSrc(id: number) {
    return {
      src: this.getSeries(id).correctOption.src,
      height: this.getSeries(id).correctOption.height,
      width: this.getSeries(id).correctOption.width
    };
  }

  /**
   * Returns the correct option value of a series
   */
  getCorrectOptionValue(id: number) {
    return this.getSeries(id).correctOption.value;
  }

  /**
   * Returns the logicalSeries array length
   */
  getLogicalSeriesLength() {
    return this.logicalSeries.length;
  }

  /**
   * Changes the color of the answer buttons
   * of the specified logical series
   */
  changeButtonsColor(actualSeries: number) {
    this.logicalSeries[actualSeries].changeBackgroundColor();
  }
}

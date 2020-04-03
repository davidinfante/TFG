import { Injectable } from '@angular/core';
import {LogicalSeries} from '../classes/logical-series';

@Injectable({
  providedIn: 'root'
})
export class LogicalSeriesService {
  private placeholder = {
    src: '../../../../assets/exercises/img/LogicalSeriesExercise/placeholder.png',
    height: 150,
    width: 150
  };
  private logicalSeries: LogicalSeries[] = [
    {
      id: 0,
      sampleImg: [
        {
          src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure4.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure4.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure1.png',
          height: 98,
          width: 98
        },
        {
          src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure4.png',
          height: 98,
          width: 98
        },
      ],
      correctOption: {
        src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure1.png',
        height: 98,
        width: 98,
        value: '3'
      },
      buttons: [
        {
          src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure4.png',
          height: 98,
          width: 98,
          value: '1'
        },
        {
          src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure3.png',
          height: 98,
          width: 98,
          value: '2'
        },
        {
          src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure1.png',
          height: 98,
          width: 98,
          value: '3'
        },
        {
          src: '../../../../assets/exercises/img/LogicalSeriesExercise/demo/figure2.png',
          height: 98,
          width: 98,
          value: '4'
        },
      ]
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
   * Returns a series' sample imgs by it's Id
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
}

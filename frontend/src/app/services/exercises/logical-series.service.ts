import { Injectable } from '@angular/core';
import {LogicalSeries} from '../../classes/exercises/logical-series';
import {FunctionsService} from '../functions.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicalSeriesService {
  private path = '/api/logicalSeries';
  /*private placeholder = {
    src: '../../../../assets/exercises/LogicalSeriesExercise/placeholder.png',
    height: 98,
    width: 98
  };*/
  private logicalSeries: LogicalSeries[] = [
    /**
     * Demo
     */
    {
      id: 0,
      sampleImg: [
        'demo4',
        'demo1',
        'demo4',
        'demo1',
        'demo4',
      ],
      correctOption: {
        id: 'demo1',
        value: '3'
      },
      buttons: [
        {
          id: 'demo4',
          value: '1'
        },
        {
          id: 'demo3',
          value: '2'
        },
        {
          id: 'demo1',
          value: '3'
        },
        {
          id: 'demo2',
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
        'series1-2',
        'series1-1',
        'series1-2',
        'series1-1',
      ],
      correctOption: {
        id: 'series1-2',
        value: '2'
      },
      buttons: [
        {
          id: 'series1-1',
          value: '1'
        },
        {
          id: 'series1-2',
          value: '2'
        },
        {
          id: 'series1-3',
          value: '3'
        },
        {
          id: 'series1-4',
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 2,
      sampleImg: [
        'series2-1',
        'series2-2',
        'series2-3',
        'series2-4',
      ],
      correctOption: {
        id: 'series2-5',
        value: '2'
      },
      buttons: [
        {
          id: 'series2-1',
          value: '1'
        },
        {
          id: 'series2-5',
          value: '2'
        },
        {
          id: 'series2-3',
          value: '3'
        },
        {
          id: 'series2-6',
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 3,
      sampleImg: [
        'series3-1',
        'series3-2',
        'series3-3',
        'series3-4',
        'series3-5',
      ],
      correctOption: {
        id: 'series3-6',
        value: '2'
      },
      buttons: [
        {
          id: 'series3-7',
          value: '1'
        },
        {
          id: 'series3-6',
          value: '2'
        },
        {
          id: 'series3-3',
          value: '3'
        },
        {
          id: 'series3-8',
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 4,
      sampleImg: [
        'series4-1',
        'series4-2',
        'series4-3',
        'series4-4',
        'series4-5',
      ],
      correctOption: {
        id: 'series4-6',
        value: '2'
      },
      buttons: [
        {
          id: 'series4-8',
          value: '1'
        },
        {
          id: 'series4-6',
          value: '2'
        },
        {
          id: 'series4-7',
          value: '3'
        },
        {
          id: 'series4-3',
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 5,
      sampleImg: [
        'series5-1',
        'series5-2',
        'series5-3',
      ],
      correctOption: {
        id: 'series5-5',
        value: '1'
      },
      buttons: [
        {
          id: 'series5-5',
          value: '1'
        },
        {
          id: 'series5-6',
          value: '2'
        },
        {
          id: 'series5-7',
          value: '3'
        },
        {
          id: 'series5-4',
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
    {
      id: 6,
      sampleImg: [
        'series6-1',
        'series6-2',
        'series6-3',
      ],
      correctOption: {
        id: 'series6-5',
        value: '3'
      },
      buttons: [
        {
          id: 'series6-4',
          value: '1'
        },
        {
          id: 'series6-6',
          value: '2'
        },
        {
          id: 'series6-5',
          value: '3'
        },
        {
          id: 'series6-7',
          value: '4'
        },
      ],
      changeBackgroundColor: LogicalSeries.prototype.changeBackgroundColor
    },
  ];

  constructor(
    private functionsService: FunctionsService,
    private httpClient: HttpClient
  ) { }

  /**
   * Gets all images from the database
   */
  queryImages(): Observable<any> {
    return this.httpClient.get(this.functionsService.getBackendUrl() + this.path + '/');
  }

  /**
   * Returns the placeholder img
   */
  /*getPlaceHolder() {
    return this.placeholder;
  }*/

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
   * Returns the correct option id of a series
   */
  getCorrectOptionId(id: number) {
    return {
      id: this.getSeries(id).correctOption.id,
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

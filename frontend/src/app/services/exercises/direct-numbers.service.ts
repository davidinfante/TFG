import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FunctionsService} from '../functions.service';

@Injectable({
  providedIn: 'root'
})
export class DirectNumbersService {
  private path = '/api/directNumbers';
  private demoSeries = [
    {
      id: 1,
      series: '58'
    },
    {
      id: 2,
      series: '37'
    },
    {
      id: 3,
      series: '326'
    },
  ];
  private series = [
    {
      id: 1,
      series: '74'
    },
    {
      id: 2,
      series: '49'
    },
    {
      id: 3,
      series: '54'
    },
    {
      id: 4,
      series: '328'
    },
    {
      id: 5,
      series: '792'
    },
    {
      id: 6,
      series: '826'
    },
    {
      id: 7,
      series: '4273'
    },
    {
      id: 8,
      series: '4295'
    },
    {
      id: 9,
      series: '7165'
    },
    {
      id: 10,
      series: '92764'
    },
    {
      id: 11,
      series: '98437'
    },
    {
      id: 12,
      series: '41972'
    },
    {
      id: 13,
      series: '895163'
    },
    {
      id: 14,
      series: '143576'
    },
    {
      id: 15,
      series: '923547'
    },
    {
      id: 16,
      series: '4789512'
    },
    {
      id: 17,
      series: '6315948'
    },
    {
      id: 18,
      series: '2589746'
    },
    {
      id: 19,
      series: '26793154'
    },
    {
      id: 20,
      series: '26431975'
    },
    {
      id: 21,
      series: '18453267'
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
   * Returns a demo series by it's Id
   */
  searchDemoSeries(id: number) {
    return {
      ...this.demoSeries.find(series => {
        return series.id === id;
      })
    };
  }

  /**
   * Returns the series of a demo series
   */
  getDemoSeriesSeries(id: number) {
    return this.searchDemoSeries(id).series;
  }

  /**
   * Returns demo series length
   */
  getDemoSeriesLength() {
    return this.demoSeries.length;
  }

  /**
   * Returns a series by it's Id
   */
  searchSeries(id: number) {
    return {
      ...this.series.find(series => {
        return series.id === id;
      })
    };
  }

  /**
   * Returns the series of a series
   */
  getSeriesSeries(id: number) {
    return this.searchSeries(id).series;
  }

  /**
   * Returns series length
   */
  getSeriesLength() {
    return this.series.length;
  }
}

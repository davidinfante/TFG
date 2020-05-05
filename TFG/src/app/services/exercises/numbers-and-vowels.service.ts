import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersAndVowelsService {
  private pizarraIntro = {
    src: '../../../../assets/exercises/DirectNumbersExercise/pizarraIntro.png',
    height: 300,
    width: 400
  };
  private pizarra = {
    src: '../../../../assets/exercises/DirectNumbersExercise/pizarra.png',
    height: 300,
    width: 400
  };
  private demoSeries = [
    {
      id: 1,
      series: 'i5',
      correctAnswer: '5i'
    },
    {
      id: 2,
      series: 'o9',
      correctAnswer: '9o'
    },
    {
      id: 3,
      series: 'u8a',
      correctAnswer: '8au'
    },
  ];
  private series = [
    {
      id: 1,
      series: 'e2',
      correctAnswer: '2e'
    },
    {
      id: 2,
      series: 'a4',
      correctAnswer: '4a'
    },
    {
      id: 3,
      series: '4e',
      correctAnswer: '4e'
    },
    {
      id: 4,
      series: '4i9',
      correctAnswer: '49i'
    },
    {
      id: 5,
      series: 'e13',
      correctAnswer: '13e'
    },
    {
      id: 6,
      series: 'ai1',
      correctAnswer: '1ai'
    },
    {
      id: 7,
      series: '81ao',
      correctAnswer: '18ao'
    },
    {
      id: 8,
      series: 'a9i5',
      correctAnswer: '59ai'
    },
    {
      id: 9,
      series: 'a42o',
      correctAnswer: '24ao'
    },
    {
      id: 10,
      series: 'i4ea6',
      correctAnswer: '46aei'
    },
    {
      id: 11,
      series: '16oi3',
      correctAnswer: '136io'
    },
    {
      id: 12,
      series: '7ea38',
      correctAnswer: '378ae'
    },
    {
      id: 13,
      series: '1uo6e2',
      correctAnswer: '126eou'
    },
    {
      id: 14,
      series: 'i9e2a1',
      correctAnswer: '129aei'
    },
    {
      id: 15,
      series: 'o6i7u2',
      correctAnswer: '267iou'
    },
    {
      id: 16,
      series: 'uiae143',
      correctAnswer: '134aeiu'
    },
    {
      id: 17,
      series: '5uo4e1a',
      correctAnswer: '145aeou'
    },
    {
      id: 18,
      series: 'iae3418',
      correctAnswer: '1348aei'
    },
    {
      id: 19,
      series: 'a7e4u16i',
      correctAnswer: '1467aeiu'
    },
    {
      id: 20,
      series: '41iae8u3',
      correctAnswer: '1348aeiu'
    },
    {
      id: 21,
      series: '9io82e7a',
      correctAnswer: '2789aeio'
    },
  ];

  constructor() { }

  /**
   * Returns the pizarraIntro img
   */
  getPizarraIntro() {
    return this.pizarraIntro;
  }

  /**
   * Returns the izarra img
   */
  getPizarra() {
    return this.pizarra;
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
   * Returns the correct answer of a demo series
   */
  getDemoSeriesCorrectAnswer(id: number) {
    return this.searchDemoSeries(id).correctAnswer;
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
   * Returns the correct answer of a demo series
   */
  getSeriesCorrectAnswer(id: number) {
    return this.searchSeries(id).correctAnswer;
  }

  /**
   * Returns series length
   */
  getSeriesLength() {
    return this.series.length;
  }
}

import { Injectable } from '@angular/core';
import {SemanticSeries} from '../../classes/exercises/semantic-series';

@Injectable({
  providedIn: 'root'
})
export class SemanticSeriesService {
  private semanticSeries: SemanticSeries[] = [
    /**
     * Sample series
     */
    {
      id: 0,
      correctOption: {
        title: 'Mesa',
        value: '4'
      },
      buttons: [
        {
          title: 'Negro',
          value: '1'
        },
        {
          title: 'Rojo',
          value: '2'
        },
        {
          title: 'Verde',
          value: '3'
        },
        {
          title: 'Mesa',
          value: '4'
        },
        {
          title: 'Azul',
          value: '5'
        },
        {
          title: 'Amarillo',
          value: '6'
        },
      ],
      changeBackgroundColor: SemanticSeries.prototype.changeBackgroundColor
    },
    /**
     * Exercise series
     */
    {
      id: 1,
      correctOption: {
        title: 'Manzana',
        value: '3'
      },
      buttons: [
        {
          title: 'Martillo',
          value: '1'
        },
        {
          title: 'Alicate',
          value: '2'
        },
        {
          title: 'Manzana',
          value: '3'
        },
        {
          title: 'Tornillo',
          value: '4'
        },
        {
          title: 'Tuerca',
          value: '5'
        },
        {
          title: 'Taladro',
          value: '6'
        },
      ],
      changeBackgroundColor: SemanticSeries.prototype.changeBackgroundColor
    },
    {
      id: 2,
      correctOption: {
        title: 'Margarita',
        value: '5'
      },
      buttons: [
        {
          title: 'Perro',
          value: '1'
        },
        {
          title: 'Gato',
          value: '2'
        },
        {
          title: 'Canario',
          value: '3'
        },
        {
          title: 'Caballo',
          value: '4'
        },
        {
          title: 'Margarita',
          value: '5'
        },
        {
          title: 'Conejo',
          value: '6'
        },
      ],
      changeBackgroundColor: SemanticSeries.prototype.changeBackgroundColor
    },
    {
      id: 3,
      correctOption: {
        title: 'Gallina',
        value: '3'
      },
      buttons: [
        {
          title: 'Gato',
          value: '1'
        },
        {
          title: 'Perro',
          value: '2'
        },
        {
          title: 'Gallina',
          value: '3'
        },
        {
          title: 'Vaca',
          value: '4'
        },
        {
          title: 'Caballo',
          value: '5'
        },
        {
          title: 'Cabra',
          value: '6'
        },
      ],
      changeBackgroundColor: SemanticSeries.prototype.changeBackgroundColor
    },
    {
      id: 4,
      correctOption: {
        title: 'Granito',
        value: '3'
      },
      buttons: [
        {
          title: 'Esmeralda',
          value: '1'
        },
        {
          title: 'Zafiro',
          value: '2'
        },
        {
          title: 'Granito',
          value: '3'
        },
        {
          title: 'Diamante',
          value: '4'
        },
        {
          title: 'Rubí',
          value: '5'
        }
      ],
      changeBackgroundColor: SemanticSeries.prototype.changeBackgroundColor
    },
    {
      id: 5,
      correctOption: {
        title: 'Trucha',
        value: '1'
      },
      buttons: [
        {
          title: 'Trucha',
          value: '1'
        },
        {
          title: 'Tiburón',
          value: '2'
        },
        {
          title: 'Calamar',
          value: '3'
        },
        {
          title: 'Pulpo',
          value: '4'
        },
        {
          title: 'Sardina',
          value: '5'
        }
      ],
      changeBackgroundColor: SemanticSeries.prototype.changeBackgroundColor
    },
    {
      id: 6,
      correctOption: {
        title: 'Nariz',
        value: '6'
      },
      buttons: [
        {
          title: 'Pie',
          value: '1'
        },
        {
          title: 'Mejilla',
          value: '2'
        },
        {
          title: 'Brazo',
          value: '3'
        },
        {
          title: 'Pierna',
          value: '4'
        },
        {
          title: 'Oreja',
          value: '5'
        },
        {
          title: 'Nariz',
          value: '6'
        },
      ],
      changeBackgroundColor: SemanticSeries.prototype.changeBackgroundColor
    },
  ];

  constructor() { }

  /**
   * Returns a series by it's Id
   */
  getSeries(id: number) {
    return {
      ...this.semanticSeries.find(series => {
        return series.id === id;
      })
    };
  }

  /**
   * Returns a series' buttons by it's Id
   */
  getButtons(id: number) {
    return [...this.getSeries(id).buttons];
  }

  /**
   * Returns the correct option value of a series
   */
  getCorrectOptionValue(id: number) {
    return this.getSeries(id).correctOption.value;
  }

  /**
   * Returns the semanticSeries array length
   */
  getSemanticSeriesLength() {
    return this.semanticSeries.length;
  }

  /**
   * Changes the color of the answer buttons
   * of the specified logical series
   */
  changeButtonsColor(actualSeries: number) {
    this.semanticSeries[actualSeries].changeBackgroundColor();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordListService {
  /**
   * Word list to be displayed
   */
  private wordList: string[] = [
    'Buitre',
    'Clavel',
    'Licor',
    'Silla',
    'Orquídea',
    'Águila',
    'Lámpara',
    'Anís',
    'Pavo',
    'Armario',
    'Jazmín',
    'Coñac'
  ];
  /**
   * Answer list to be compared to
   */
  private answerList: string[] = [
    'buitre',
    'clavel',
    'licor',
    'silla',
    'orquidea',
    'aguila',
    'lampara',
    'anis',
    'pavo',
    'armario',
    'jazmin',
    'conac'
  ];
  /**
   * Alternative words list
   */
  private alternativeList: string[] = [
    'Sábana',
    'Pavo',
    'Armario',
    'Lámpara',
    'Buitre',
    'Pescadería',
    'Anís',
    'Comprar',
    'Silla',
    'Comida',
    'Pelota',
    'Jirafa',
    'Coñac',
    'Clavel',
    'Cumpleaños',
    'Autobús',
    'Factura',
    'Conejo',
    'Jazmín',
    'Taladro',
    'Libro',
    'Aguador',
    'Teclado',
    'Compra',
    'Elemento',
    'Águila',
    'Jardines',
    'Licor',
    'Orquídea',
    'Vecina',
    'Dinosaurio',
    'Periódico',
    'Horario',
    'Macetas',
    'Carta',
    'Caseta',
  ];

  constructor() { }

  /**
   * Returns the word list
   */
  getWordList() {
    return [...this.wordList];
  }

  /**
   * Returns the answer list
   */
  getAnswerList() {
    return [...this.answerList];
  }

  /**
   * Returns the alternative list
   */
  getAlternativeList() {
    return [...this.alternativeList];
  }
}

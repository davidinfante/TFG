import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordListService {
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

  constructor() { }

  /**
   * Returns the word list
   */
  getWordList() {
    return [...this.wordList];
  }
}

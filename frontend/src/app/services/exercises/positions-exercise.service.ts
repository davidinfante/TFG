import { Injectable } from '@angular/core';
import {CheckboxArray} from '../../classes/checkboxArray';
import {FunctionsService} from '../functions.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsExerciseService {
  private path = '/api/positions';
  /*private tejado = {
    src: '../../../../assets/exercises/PositionsExercise/tejado.png',
    height: 136,
    width: 468
  };
  private ventanaClose = {
    src: '../../../../assets/exercises/PositionsExercise/ventana-close.png',
    height: 98,
    width: 98
  };
  private ventanaOpen = {
    src: '../../../../assets/exercises/PositionsExercise/ventana-open.png',
    height: 98,
    width: 98
  };*/
  private positions: CheckboxArray[] = [
    {
      id: 1,
      positions: [
        {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
      ],
      correctPositions: [1, 3, 5, 4, 2],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 2,
      positions: [
        {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
        {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
      ],
      correctPositions: [2, 4, 5, 3, 1],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 3,
      positions: [
        {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false},
        {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
      ],
      correctPositions: [2, 4, 1, 5, 3],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 4,
      positions: [
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false}, {value: false, isChecked: false},
        {value: true, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false},
        {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: false, isChecked: false}, {value: true, isChecked: false},
      ],
      correctPositions: [3, 2, 4, 1, 5],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
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
   * Returns the tejado img
   */
  /*getTejado() {
    return this.tejado;
  }*/

  /**
   * Returns the ventanaClose img
   */
  /*getVentanaClose() {
    return this.ventanaClose;
  }*/

  /**
   * Returns the ventanaOpen img
   */
  /*getVentanaOpen() {
    return this.ventanaOpen;
  }*/

  /**
   * Returns a positions exercise by it's Id
   */
  searchPositionsById(id: number) {
    return {
      ...this.positions.find(exerc => {
        return exerc.id === id;
      })
    };
  }

  /**
   * Get the positions array by it's Id
   */
  getPositionsArray(id: number) {
    return [...this.searchPositionsById(id).positions];
  }

  /**
   * Returns the Positions array length
   */
  getPositionsLength() {
    return this.positions.length;
  }

  /**
   * Returns the correctPositions array
   */
  getCorrectPositions(id: number) {
    return [...this.searchPositionsById(id).correctPositions];
  }

  /**
   * Checks if the value and isChecked match
   * if true, the answer is correct
   */
  isCorrectAnswer(actualBuilding: number): boolean {
    return this.positions[actualBuilding - 1].allValueAndIsCheckedMatch();
  }

  /**
   * Resets the isChecked value
   */
  resetIsChecked(actualBuilding: number) {
    this.positions[actualBuilding - 1].resetIsChecked();
  }

}

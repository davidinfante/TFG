import { Injectable } from '@angular/core';
import {Exercise} from '../classes/exercise';
import {WordListExerciseComponent} from '../components/exercises/word-list-exercise/word-list-exercise.component';
import {LogicalSeriesExerciseComponent} from '../components/exercises/logical-series-exercise/logical-series-exercise.component';
import {SemanticSeriesExerciseComponent} from '../components/exercises/semantic-series-exercise/semantic-series-exercise.component';
import {PositionsExerciseComponent} from '../components/exercises/positions-exercise/positions-exercise.component';
import {DirectNumbersExerciseComponent} from '../components/exercises/direct-numbers-exercise/direct-numbers-exercise.component';
import {NumbersAndVowelsExerciseComponent} from '../components/exercises/numbers-and-vowels-exercise/numbers-and-vowels-exercise.component';
import {PyramidsExerciseComponent} from '../components/exercises/pyramids-exercise/pyramids-exercise.component';
import {WordListExerciseAlternativeComponent} from '../components/exercises/word-list-exercise-alternative/word-list-exercise-alternative.component';
import {MouseDialogExerciseComponent} from '../components/exercises/mouse-dialog-exercise/mouse-dialog-exercise.component';

@Injectable({
  providedIn: 'root'
})
/**
 * Exercises service
 */
export class ExercisesService {
  private exercises: Exercise[] = [
    {
      id: 'e1',
      class: LogicalSeriesExerciseComponent,
      title: '¡Completa la serie!'
    },
    {
      id: 'e2',
      class: WordListExerciseComponent,
      title: '¡Memoriza la lista de palabras!'
    },
    {
      id: 'e3',
      class: SemanticSeriesExerciseComponent,
      title: '¡Selecciona la palabra que no tenga algo en común con el resto!'
    },
    {
      id: 'e4',
      class: PositionsExerciseComponent,
      title: '¡Memoriza las posiciones!'
    },
    {
      id: 'e5',
      class: DirectNumbersExerciseComponent,
      title: '¡Dictado de Números!'
    },
    {
      id: 'e6',
      class: NumbersAndVowelsExerciseComponent,
      title: '¡Dictado de Números y Vocales!'
    },
    {
      id: 'e7',
      class: PyramidsExerciseComponent,
      title: '¡Pirámides!'
    },
    {
      id: 'e8',
      class: WordListExerciseAlternativeComponent,
      title: '¡Lista de Palabras (Largo Plazo)!'
    },
    {
      id: 'e9',
      class: MouseDialogExerciseComponent,
      title: '¡Prueba de Puntería!'
    },
  ];

  constructor() { }

  /**
   * Return all existent exercises
   */
  getAllExercises() {
    return  [...this.exercises];
  }

  /**
   * Returns an exercise by it's Id
   */
  getExercise(id: string) {
    return {
      ...this.exercises.find(exercise => {
        return exercise.id === id;
      })
    };
  }

  /**
   * Return the number of exercises in the array
   */
  length() {
    return this.exercises.length;
  }
}

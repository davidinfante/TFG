import { Injectable } from '@angular/core';
import {Exercise} from '../classes/exercise';
import {WordListExerciseComponent} from '../components/exercises/word-list-exercise/word-list-exercise.component';
import {LogicalSeriesExerciseComponent} from '../components/exercises/logical-series-exercise/logical-series-exercise.component';

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
      title: '¡Lista de palabras!'
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

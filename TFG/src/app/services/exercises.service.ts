import { Injectable } from '@angular/core';
import {Exercise} from '../classes/exercise';
import {WordListExerciseComponent} from '../components/exercises/word-list-exercise/word-list-exercise.component';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private exercises: Exercise[] = [
    {
      id: 'e1',
      class: WordListExerciseComponent,
      title: '¡Lista de palabras!'
    },
    {
      id: 'e2',
      class: WordListExerciseComponent,
      title: '¡Lista de palabras!',
    }
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
  getNumberOfExercises() {
    return this.exercises.length;
  }
}

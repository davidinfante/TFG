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
      title: '¡Lista de palabras!',
      description: 'Memoriza las palabras de la lista y cuando acabe el tiempo intenta escribir tantas como puedas. Pulsa comenzar cuando estés listo.'
    },
    {
      id: 'e2',
      class: WordListExerciseComponent,
      title: '¡Lista de palabras SEGUNDA EDICION!',
      description: 'Memoriza las palabras de la lista y cuando acabe el tiempo intenta escribir tantas como puedas. Pulsa comenzar cuando estés listo.'
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

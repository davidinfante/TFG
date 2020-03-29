import { Injectable } from '@angular/core';
import {Exercise} from "../classes/exercise";
import {WordListExerciseComponent} from "../components/word-list-exercise/word-list-exercise.component";

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private exercises: Exercise[] = [
    {
      id: 'e1',
      class: WordListExerciseComponent,
      title: 'ejer1',
      description: 'desc ejer1'
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
}

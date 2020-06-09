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
import {IntroductionExerciseComponent} from '../components/exercises/introduction-exercise/introduction-exercise.component';
import {InstrumentalQuestionnaireExerciseComponent} from '../components/exercises/instrumental-questionnaire-exercise/instrumental-questionnaire-exercise.component';
import {ClassifyObjectsExerciseComponent} from '../components/exercises/classify-objects-exercise/classify-objects-exercise.component';

@Injectable({
  providedIn: 'root'
})
/**
 * Exercises service
 */
export class ExercisesService {
  private exercises: Exercise[] = [
    // Memory
    {
      id: 1,
      class: NumbersAndVowelsExerciseComponent,
      title: '¡Dictado de Números y Vocales!'
    },
    {
      id: 3,
      class: ClassifyObjectsExerciseComponent,
      title: 'Clasificación y memorización de imágenes'
    },
    {
      id: 19,
      class: WordListExerciseAlternativeComponent,
      title: '¡Lista de Palabras (Largo Plazo)!'
    },
    {
      id: 7,
      class: DirectNumbersExerciseComponent,
      title: '¡Dictado de Números!'
    },
    {
      id: 8,
      class: WordListExerciseComponent,
      title: '¡Memoriza la lista de palabras!'
    },
    {
      id: 25,
      class: PositionsExerciseComponent,
      title: '¡Memoriza las posiciones!'
    },

    // Attention
    {
      id: 6,
      class: PyramidsExerciseComponent,
      title: '¡Pirámides!'
    },

    // Reasoning exercises
    {
      id: 11,
      class: SemanticSeriesExerciseComponent,
      title: '¡Selecciona la palabra que no tenga algo en común con el resto!'
    },
    {
      id: 12,
      class: LogicalSeriesExerciseComponent,
      title: '¡Completa la serie!'
    },

    // Planning

    // Tests
    {
      id: 30,
      class: IntroductionExerciseComponent,
      title: 'Introducción a VIRTRA-EL'
    },
    {
      id: 32,
      class: MouseDialogExerciseComponent,
      title: '¡Prueba de Puntería!'
    },
    {
      id: 33,
      class: InstrumentalQuestionnaireExerciseComponent,
      title: 'Cuestionario final sesión'
    },
  ];

  constructor() { }

  /**
   * Returns an exercise by it's Id
   */
  getExercise(id: number) {
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

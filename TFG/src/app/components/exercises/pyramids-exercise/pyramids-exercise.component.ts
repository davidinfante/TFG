import { Component, OnInit } from '@angular/core';
import {DurationKind} from '../../../enum/duration-kind.enum';
import {exerciseManager} from '../../../classes/exercise-manager';
import {PyramidsService} from '../../../services/exercises/pyramids.service';

/**
 * Phase of the exercise
 */
export enum ExercisePhase {
  INTRO1,
  INTRO2,
  DEMO,
  DEMO_END,
  COUNTDOWN,
  EXERCISE,
  EXERCISE_CHANGE,
  END
}

@Component({
  selector: 'app-pyramids-exercise',
  templateUrl: './pyramids-exercise.component.html',
  styleUrls: ['./pyramids-exercise.component.scss'],
})
export class PyramidsExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  id: string;
  type: number;
  duration: number;
  maxTime: number;
  dependsOn: number;
  repetitions: number;
  durationKind: DurationKind;
  /**
   * Pyramids Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private score: number;

  constructor(private pyramidsService: PyramidsService) {
    exerciseManager.exerciseInfo.subscribe( data => {
      this.id = data.id,
        this.type = data.type,
        this.duration = data.duration,
        this.maxTime = data.maxTime,
        this.dependsOn = data.dependsOn,
        this.repetitions = data.repetitions,
        this.durationKind = data.durationKind;
    });
  }

  ngOnInit() {
    this.exercisePhase = ExercisePhase.INTRO1;
    this.changeAssistantText();
    this.score = 0;
  }

  /**
   * Ends the exercise notifying the session
   */
  private endExercise(): void {
    exerciseManager.notifyEnd({
      id: this.id,
      score: this.score,
      success: true
    });
  }

  /**
   * Changes the text and visibility of the assistant
   * during the exercise
   */
  private changeAssistantText(): void {
    let showA;
    let titleA;
    let descriptionA;

    switch (this.exercisePhase) {
      case ExercisePhase.INTRO1:
        showA = true;
        titleA = '¡Pirámides!';
        descriptionA = 'En este ejercicio te mostraré distintas postales de pirámides y deberás pulsar sólo sobre aquellas ' +
          'que tengan una pirámide grande y dos pequeñas con puerta en el lado soleado. Debajo puedes ver varios ejemplos del tipo ' +
          'de pirámides que debes seleccionar.';
        break;
      case ExercisePhase.INTRO2:
        showA = true;
        titleA = '¡Pirámides!';
        descriptionA = '¡Ten cuidado! Porque hay postales como las de abajo donde no hay una pirámide grande, donde las ' +
          'pirámides pequeñas no tienen puerta o donde las tienen pero mirando a la sombra. Esas no me interesan. Cuando ' +
          'estés listo pulsa el botón Continuar.';
        break;
      case ExercisePhase.DEMO:
        showA = true;
        titleA = '¡Pirámides!';
        descriptionA = 'Ahora vamos a hacer una prueba. Debes seleccionar aquellas postales que tengan una pirámide grande ' +
          'y además dos pequeñas con puerta en el lado soleado. En el ejercicio  habrá más pirámides aparte de estas.';
        break;
      case ExercisePhase.DEMO_END:
        showA = true;
        titleA = '¡Pirámides!';
        descriptionA = 'Has finalizado la prueba correctamente, ¡Enhorabuena! Ahora comenzarás el ejercicio. Cuando estés ' +
          'listo pulsa el botón Comenzar Ejercicio.';
        break;
      case ExercisePhase.COUNTDOWN:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.EXERCISE:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.EXERCISE_CHANGE:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.END:
        showA = true;
        titleA = '¡Enhorabuena!';
        descriptionA = '{{ medalla }} Has conseguido una puntuación de: ' + this.score + ' puntos.';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {FunctionsService} from '../../../services/functions.service';
import {ExerciseAttributes} from '../../../classes/exercise-attributes';
import {Score} from '../../../classes/score';
import {ExerciseResultsService} from '../../../services/exercise-results.service';

/**
 * Phases of the exercise
 */
export enum ExercisePhase {
  INTRO,
  EXERCISE,
  END
}

@Component({
  selector: 'app-mouse-dialog-exercise',
  templateUrl: './mouse-dialog-exercise.component.html',
  styleUrls: ['./mouse-dialog-exercise.component.scss'],
})
export class MouseDialogExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  private userId: number;
  private exerciseAttributes: ExerciseAttributes;
  /**
   * Mouse Dialog Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private repetition: number;
  private score: Score;

  constructor(
    private functionsService: FunctionsService,
    private exerciseResultsService: ExerciseResultsService
  ) {
    exerciseManager.exerciseInfo.subscribe( data => {
      this.userId = data.userId;
      this.exerciseAttributes = data.attributes;
    });
  }

  ngOnInit() {
    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();
    this.repetition = 0;
    this.score = new Score();
  }

  /**
   * Ends the exercise notifying the session
   */
  private endExercise(): void {
    this.exerciseResultsService.addResult(this.userId, this.exerciseAttributes.id, this.score).subscribe( res => {
      exerciseManager.notifyEnd({
        id: this.exerciseAttributes.id,
        success: true
      });
    });
  }

  /**
   * Starts the exercise
   */
  private startExercise(): void {
    this.exercisePhase = ExercisePhase.EXERCISE;
    this.changeAssistantText();
    this.nextIteration();
  }

  /**
   * Iterates the exercise until the number
   * of repetitions is complete
   */
  private nextIteration(): void {
    if (this.repetition < this.exerciseAttributes.repetitions) {
      ++this.score.correctCount;
      ++this.repetition;
    } else {
      this.exercisePhase = ExercisePhase.END;
      this.changeAssistantText();
    }
  }

  /**
   * Returns a random position
   */
  private getPosition(): {} {
    let l, t;
    // If mobile device
    if (this.functionsService.isMobile()) {
      l = Math.random() * 50;
      t = Math.random() * 80;
    } else {
      l = Math.random() * 85;
      t = Math.random() * 80;
    }

    return {
      position: 'absolute',
      left: l + '%',
      top: t + '%'
    };
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
      case ExercisePhase.INTRO:
        showA = true;
        titleA = '¡Prueba de Puntería!';
        descriptionA = 'Antes de comenzar con la explicación y la realización de ejercicios vamos a comprobar tu ' +
          'puntería. Para ello, tendrás que pulsar con el ratón en los cuadrados azules que aparezcan por la pantalla. ' +
          'Pulsa en el botón Continuar cuando estés listo para comenzar.';
        break;
      case ExercisePhase.EXERCISE:
        showA = true;
        titleA = '¡Prueba de Puntería!';
        descriptionA = 'Pulsa en el botón que pone ¡Púlsame! Trata de no pulsar fuera de ese botón.';
        break;
      case ExercisePhase.END:
        showA = true;
        titleA = '¡Prueba de Puntería!';
        descriptionA = '¡Enhorabuena! ¡Lo has hecho muy bien! Ahora continuaremos con VIRTRA-EL. Pulsa en el botón ' +
          'Continuar cuando estés listo.';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }

}

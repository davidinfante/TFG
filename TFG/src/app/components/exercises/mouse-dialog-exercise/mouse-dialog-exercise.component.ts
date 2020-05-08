import { Component, OnInit } from '@angular/core';
import {DurationKind} from '../../../enum/duration-kind.enum';
import {exerciseManager} from '../../../classes/exercise-manager';
import {FunctionsService} from '../../../services/functions.service';

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
  private id: string;
  private type: number;
  private duration: number;
  private maxTime: number;
  private dependsOn: number;
  private repetitions: number;
  private durationKind: DurationKind;
  /**
   * Mouse Dialog Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private repetition: number;
  private score: number;

  constructor(private functionsService: FunctionsService) {
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
    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();
    this.repetition = 0;
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
    if (this.repetition < this.repetitions) {
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

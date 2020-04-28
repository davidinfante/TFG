import { Component, OnInit } from '@angular/core';
import {DurationKind} from '../../../enum/duration-kind.enum';
import {exerciseManager} from '../../../classes/exercise-manager';

/**
 * Phase of the exercise
 */
export enum ExercisePhase {
  INTRO,
  // Repetition and answer of each building
  REP1,
  ANS1,
  REP2,
  ANS2,
  REP3,
  ANS3,
  REP4,
  ANS4,
  // Correct answer, next building messages
  NEXT_BUILDING,
  NEXT_BUILDING_INTRO,
  // Correct answer but has to repeat message
  REP_TRY_AGAIN,
  // Incorrect answer, try again message
  ERR_TRY_AGAIN,
  // Error messages and display status
  ERR_1,
  ERR_2,
  ERR_3,
  ERR_4
}

@Component({
  selector: 'app-positions-exercise',
  templateUrl: './positions-exercise.component.html',
  styleUrls: ['./positions-exercise.component.scss'],
})
export class PositionsExerciseComponent implements OnInit {
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
   * Positions Exercise's own attributes
   */

  constructor() {
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

  ngOnInit() {}

  /**
   * Ends the exercise notifying the session
   */
  private endExercise(): void {
    exerciseManager.notifyEnd({
      id: this.id,
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
      case ExercisePhase.INTRO:
        showA = true;
        titleA = '¡Completa la serie!';
        descriptionA = 'En este ejercicio te mostraré una serie de dibujos que siguen un orden determinado. Deberás' +
          ' averiguar cómo van cambiando y añadir el dibujo que falta en el lugar de la señal de interrogación. ' +
          'Para ello tendrás que pulsar sobre una de las imágenes numeradas que aparecerán en la parte inferior de la pantalla.';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {DurationKind} from '../../../enum/duration-kind.enum';
import {exerciseManager} from '../../../classes/exercise-manager';
import {LogicalSeriesService} from '../../../services/logical-series.service';

/**
 * Phase of the exercise
 */
export enum ExercisePhase {
  INTRO,
  DEMO,
  COUNTDOWN,
  EXERCISE,
}

@Component({
  selector: 'app-logical-series-exercise',
  templateUrl: './logical-series-exercise.component.html',
  styleUrls: ['./logical-series-exercise.component.scss'],
})
/**
 * Local Series Exercise, shows a series of elements
 * and the following one must be picked between
 * a few options
 */
export class LogicalSeriesExerciseComponent implements OnInit {
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
   * Local Series Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private actualSeries: number;
  private demoRadio: string;
  /**
   * Timer variables
   */
  private interval;
  private countdownTimeLeft: number;

  constructor(private logicalSeriesService: LogicalSeriesService) {
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
    this.actualSeries = 0;
    this.demoRadio = 'none';
    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();
  }

  /**
   * Begin the exercise's demo
   */
  private startDemo(): void {
    this.exercisePhase = ExercisePhase.DEMO;
    this.changeAssistantText();
  }

  /**
   * Begin the exercise's countdown
   */
  private startExercise(): void {
    this.exercisePhase = ExercisePhase.DEMO;
    this.changeAssistantText();
  }

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
      case ExercisePhase.DEMO:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }

  /**
   * Starts the countdown before showing the list
   */
  private startCountdown(): void {
    this.interval = setInterval(() => {
      if (this.countdownTimeLeft > 0) {
        this.countdownTimeLeft--;
      } else {
        //this.exercisePhase = ExercisePhase.EXERCISE;
        this.pauseTimer();
      }
    }, 1000);
  }

  /**
   * Pauses the timer
   */
  private pauseTimer(): void {
    clearInterval(this.interval);
  }

  /**
   * Check's if the answer is correct
   */
  private checkAnswer(): void {
    switch (this.exercisePhase) {
      case ExercisePhase.DEMO:
        if (this.demoRadio === '3') {
          console.log('correct');
        }
        break;
    }
  }
}

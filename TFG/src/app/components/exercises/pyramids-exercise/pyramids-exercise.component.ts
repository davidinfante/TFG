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
  private actualPyramids: number;
  private demoPyramidsLeft: number;
  private demoText: string;
  private score: number;
  /**
   * Timer variables
   */
  private interval;
  private cdInterval;
  private countdownTimeLeft: number;
  private timeLeft: number;

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
    this.actualPyramids = 0;
    this.demoPyramidsLeft = 0;
    this.demoText = '';
    this.score = 0;

    this.countdownTimeLeft = 3;
    this.timeLeft = this.duration;
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
   * Continues to INTRO2 phase
   */
  private intro2(): void {
    this.exercisePhase = ExercisePhase.INTRO2;
    this.changeAssistantText();
  }

  /**
   * Starts the demo
   */
  private startDemo(): void {
    this.exercisePhase = ExercisePhase.DEMO;
    this.changeAssistantText();
    this.getAllDemoPyramids();
    this.demoText = 'Quedan ' + this.demoPyramidsLeft + ' imágenes correctas';
  }

  /**
   * Gives demoPyramidsLeft its initial value
   * of true values
   */
  private getAllDemoPyramids(): void {
    let numberOfTrue = 0;
    for (const pos of this.pyramidsService.getPositionsArray(this.actualPyramids)) {
      if (pos.value) {
        ++numberOfTrue;
      }
    }
    this.demoPyramidsLeft = numberOfTrue;
  }

  /**
   * Check's how many Pyramids are left
   * in the demo to be completed
   */
  private demoScore(): void {
    const pyrLeft = this.demoPyramidsLeft - this.pyramidsService.numberOfCorrectAnswers(this.actualPyramids).matches;
    this.demoText = 'Quedan ' + pyrLeft + ' imágenes correctas';

    if (pyrLeft === 0) {
      this.exercisePhase = ExercisePhase.DEMO_END;
      this.changeAssistantText();
    }
  }

  /**
   * Controls the next Pyramids series
   */
  private nextExercise() {
    // If there are more series
    if (this.actualPyramids < this.pyramidsService.getPyramidsLength() - 1) { // - 1 because of demoSeries being id: 0
      ++this.actualPyramids;
      this.exercisePhase = ExercisePhase.EXERCISE;
      this.startTimer();
    }  else { // Otherwise end the exercise
      this.exercisePhase = ExercisePhase.END;
    }
    this.changeAssistantText();
  }

  /**
   * Exercise change panel function
   */
  private exerciseChangePanel(): void {
    // Update score
    this.score += this.pyramidsService.numberOfCorrectAnswers(this.actualPyramids).matches -
      this.pyramidsService.numberOfCorrectAnswers(this.actualPyramids).errors;

    // If there are not more exercises left
    if (this.actualPyramids >= this.pyramidsService.getPyramidsLength() - 1) { // - 1 because of demoSeries being id: 0
      ++this.actualPyramids;
      this.nextExercise();
    } else { // Otherwise continue to exercise_change
      this.exercisePhase = ExercisePhase.EXERCISE_CHANGE;
      this.changeAssistantText();

      this.cdInterval = setInterval(() => {
        if (this.countdownTimeLeft > 0) {
          this.countdownTimeLeft--;
        } else {
          this.pauseTimer();
          this.nextExercise();
        }
      }, 1000);
    }
  }

  /**
   * Starts the countdown before starting the exercise
   */
  private startCountdown(): void {
    this.exercisePhase = ExercisePhase.COUNTDOWN;
    this.changeAssistantText();

    this.cdInterval = setInterval(() => {
      if (this.countdownTimeLeft > 0) {
        this.countdownTimeLeft--;
      } else {
        this.pauseTimer();
        this.nextExercise();
      }
    }, 1000);
  }

  /**
   * Starts the timer during the exercise
   */
  private startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.changeAssistantText();
      } else {
        this.pauseTimer();
        this.exerciseChangePanel();
      }
    }, 1000);
  }

  /**
   * Pauses the timer
   */
  private pauseTimer(): void {
    clearInterval(this.cdInterval);
    clearInterval(this.interval);
    this.countdownTimeLeft = 1;
    this.timeLeft = this.duration;
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
        showA = true;
        titleA = 'El ejercicio comenzará en:';
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

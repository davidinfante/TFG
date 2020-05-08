import { Component, OnInit } from '@angular/core';
import {DurationKind} from '../../../enum/duration-kind.enum';
import {exerciseManager} from '../../../classes/exercise-manager';
import {PositionsExerciseService} from '../../../services/exercises/positions-exercise.service';

/**
 * Phase of the exercise
 */
export enum ExercisePhase {
  INTRO,
  COUNTDOWN,
  // Building and answer phase of each building
  BUILDING,
  ANSWER,
  // Correct answer but has to repeat message
  REP_TRY_AGAIN,
  // Correct answer, next building messages
  NEXT_BUILDING,
  NEXT_BUILDING_INTRO,
  // Exercise end
  END,
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
  private id: string;
  private type: number;
  private duration: number;
  private maxTime: number;
  private dependsOn: number;
  private repetitions: number;
  private durationKind: DurationKind;
  /**
   * Positions Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private actualBuilding: number;
  private repeatedBuilding: boolean;
  private lastError: ExercisePhase;
  private score: number;
  /**
   * Timer variables
   */
  private interval;
  private countdownTimeLeft: number;
  private timeLeft: number;

  constructor(private positionsExerciseService: PositionsExerciseService) {
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
    this.countdownTimeLeft = 3;
    this.timeLeft = 10;
    this.actualBuilding = 1;
    this.repeatedBuilding = false;
    this.lastError = null;
    this.score = 0;
  }

  /**
   * Starts the exercise with the countdown
   */
  private startExercise(): void {
    this.exercisePhase = ExercisePhase.COUNTDOWN;
    this.changeAssistantText();
    this.startCountdown();
  }

  /**
   * Get the next positions exercise
   */
  private nextExercise(): void {
    this.exercisePhase = ExercisePhase.BUILDING;
    this.changeAssistantText();
    this.startTimer();
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
   * Starts the countdown before starting the exercise
   */
  private startCountdown(): void {
    this.interval = setInterval(() => {
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
      } else {
        this.exercisePhase = ExercisePhase.ANSWER;
        this.changeAssistantText();
        this.pauseTimer();
      }
    }, 1000);
  }

  /**
   * Pauses the timer
   */
  private pauseTimer(): void {
    clearInterval(this.interval);
    this.timeLeft = 10;
  }

  /**
   * Checks if the answer given is correct
   */
  private checkAnswer(): void {
    const correctAnswer = this.positionsExerciseService.isCorrectAnswer(this.actualBuilding);
    this.positionsExerciseService.resetIsChecked(this.actualBuilding);
    // If correct
    if (correctAnswer) {
      ++this.score;
      // If has been already repeated continue to next building
      if (this.repeatedBuilding) {
        this.repeatedBuilding = false;
        // If there is a Next building
        if (this.actualBuilding < this.positionsExerciseService.getPositionsLength()) {
          ++this.actualBuilding;
          this.exercisePhase = ExercisePhase.NEXT_BUILDING;
        }  else { // End the exercise
          this.exercisePhase = ExercisePhase.END;
        }
        this.changeAssistantText();
      } else { // If this building hasn't been repeated
        this.exercisePhase = ExercisePhase.REP_TRY_AGAIN;
        this.repeatedBuilding = true;
        this.changeAssistantText();
      }
    } else { // If not correct
      --this.score;
      // Error cycle
      switch (this.lastError) {
        case null:
          this.exercisePhase = ExercisePhase.ERR_1;
          this.lastError = ExercisePhase.ERR_1;
          break;
        case ExercisePhase.ERR_1:
          this.exercisePhase = ExercisePhase.ERR_2;
          this.lastError = ExercisePhase.ERR_2;
          break;
        case ExercisePhase.ERR_2:
          this.exercisePhase = ExercisePhase.ERR_3;
          this.lastError = ExercisePhase.ERR_3;
          break;
        case ExercisePhase.ERR_3:
          this.exercisePhase = ExercisePhase.ERR_4;
          this.lastError = ExercisePhase.ERR_4;
          break;
        case ExercisePhase.ERR_4:
          this.exercisePhase = ExercisePhase.ERR_3;
          this.lastError = ExercisePhase.ERR_3;
          break;
      }
      this.changeAssistantText();
    }
  }

  /**
   * Repeats the same building because repetition or error
   */
  private tryAgain(): void {
    this.exercisePhase = ExercisePhase.BUILDING;
    this.changeAssistantText();
    this.startTimer();
  }

  /**
   * Redirects to the Error Try Again message
   */
  private errorTryAgain(): void {
    this.exercisePhase = ExercisePhase.ERR_TRY_AGAIN;
    this.changeAssistantText();
  }

  /**
   * Gets to the Next Building Intro Phase
   */
  private nextBuildingIntro(): void {
    this.exercisePhase = ExercisePhase.NEXT_BUILDING_INTRO;
    this.changeAssistantText();
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
        titleA = '¡Test de Posiciones!';
        descriptionA = '¡Estupendo! En este ejercicio te voy a mostrar un edificio con filas de ventanas. ' +
          'En algunas de ellas aparecerán personas y deberás memorizar en qué lugar están. Una vez que se cierren de ' +
          'nuevo todas las ventanas deberás marcar dónde crees que aparecieron estas personas.';
        break;
      case ExercisePhase.COUNTDOWN:
        showA = true;
        titleA = 'El ejercicio comenzará en:';
        descriptionA = '';
        break;
      case ExercisePhase.BUILDING:
        showA = true;
        titleA = '¡Test de Posiciones!';
        descriptionA = 'Repetición: ' + this.actualBuilding + '/' + this.positionsExerciseService.getPositionsLength() + '.' +
          'Trata de memorizar las posiciones de las ventanas abiertas. Quedan ' + this.timeLeft + ' segundos.';
        break;
      case ExercisePhase.ANSWER:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.REP_TRY_AGAIN:
        showA = true;
        titleA = '¡Test de Posiciones!';
        descriptionA = '¡Perfecto, lo has hecho muy bien! Has sido capaz de recordar la posición de cada ventana abierta.' +
          'Veamos si eres capaz de recordar de nuevo la posición de las ventanas abiertas. Cuando estés preparado, pulsa en el botón ' +
          'Nuevo Intento.';
        break;
      case ExercisePhase.NEXT_BUILDING:
        showA = true;
        titleA = '¡Test de Posiciones!';
        descriptionA = '¡Perfecto! Has vuelto a colocar las cinco ventanas abiertas en sus lugares correctos. ' +
          'Ya te sabes perfectamente este edificio, veamos si eres capaz de aprender un edificio nuevo. ' +
          'Cuando estés preparado, pulsa en el botón Siguiente Edificio.';
        break;
      case ExercisePhase.NEXT_BUILDING_INTRO:
        showA = true;
        titleA = '¡Test de Posiciones!';
        descriptionA = 'Continuamos con el ejercicio. Recuerda que debes memorizar la posición de las ventanas abiertas, ' +
          'para luego marcarlas.';
        break;
      case ExercisePhase.END:
        showA = true;
        titleA = '¡Enhorabuena!';
        descriptionA = '{{ medalla }} Has conseguido una puntuación de: ' + this.score + ' puntos.';
        break;
      case ExercisePhase.ERR_TRY_AGAIN:
        showA = true;
        titleA = '¡Test de Posiciones!';
        descriptionA = 'Cuando estés preparado para repetir el ejercicio de nuevo pulsa el botón Nuevo Intento.';
        break;
      case ExercisePhase.ERR_1:
        showA = true;
        titleA = '¡Test de Posiciones!';
        descriptionA = 'Has tenido algún fallo. Fíjate bien en las ventanas que hay abiertas. Están parpadeando ahora ' +
          'mismo para que las veas mejor.';
        break;
      case ExercisePhase.ERR_2:
        showA = true;
        titleA = '¡Test de Posiciones!';
        descriptionA = 'Has tenido algún fallo. Vamos a intentar hacerlo un poco mejor. Fíjate bien y señala directamente con ' +
          'tu dedo siguiendo el orden donde se encuentra cada una de las ventanas abiertas. Cuando estés preparado para repetir ' +
          'el ejercicio de nuevo pulsa en el botón Nuevo Intento.';
        break;
      case ExercisePhase.ERR_3:
        showA = true;
        titleA = '¡Test de Posiciones!';
        descriptionA = 'Has tenido algún fallo. Vamos a intentar recordar un poco mejor donde están situadas las ventanas abiertas ' +
          'en cada fila. Puede ayudarte tratar de contarlas antes de poner el dedo directamente. Por ejemplo, en el edificio de abajo, ' +
          'la primera ventana abierta está en el cuadrado ' + this.positionsExerciseService.getCorrectPositions(this.actualBuilding)[0] +
          ' de la primera fila y la segunda está en el cuadrado ' +
          this.positionsExerciseService.getCorrectPositions(this.actualBuilding)[1] +
          ' de la segunda fila. Cuando estés preparado para repetir el ejercicio de nuevo pulsa en el botón Nuevo Intento.';
        break;
      case ExercisePhase.ERR_4:
        showA = true;
        titleA = '¡Test de Posiciones!';
        descriptionA = 'Has tenido algún fallo. Vamos a intentarlo otra vez. Ahora te voy a dar otra ayuda que seguramente te va ' +
          'a servir también para hacer mejor la tarea. Fíjate bien, en la primera fila, la ventana abierta está, como antes ' +
          'decíamos, en el cuadrado ' + this.positionsExerciseService.getCorrectPositions(this.actualBuilding)[0] + '. ' +
          'En la segunda fila, la ventana abierta está en el cuadrado ' +
          this.positionsExerciseService.getCorrectPositions(this.actualBuilding)[1] +
          ', ¿ves? En la tercera, la ventana abierta está en el cuadrado ' +
          this.positionsExerciseService.getCorrectPositions(this.actualBuilding)[2] +
          '. En la cuarta fila, la ventana está en el cuadrado ' +
          this.positionsExerciseService.getCorrectPositions(this.actualBuilding)[3] +
          ' Y, en la última fila, la ventana está en cuadrado ' +
          this.positionsExerciseService.getCorrectPositions(this.actualBuilding)[4] +
          ' Cuando estés preparado para repetir el ejercicio de nuevo pulsa en el botón Nuevo Intento.';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }
}

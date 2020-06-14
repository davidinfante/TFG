import { Component, OnInit } from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {DirectNumbersService} from '../../../services/exercises/direct-numbers.service';
import {ExerciseAttributes} from '../../../classes/exercise-attributes';
import {IdImage} from '../../../classes/image';
import {ExerciseResultsService} from '../../../services/exercise-results.service';
import {Score} from '../../../classes/score';

/**
 * Phases of the exercise
 */
export enum ExercisePhase {
  INTRO,
  // Demo phases
  DEMO_INTRO,
  ANSWER_DEMO,
  DEMO_END,
  // Interaction phases
  WATCH,
  ANSWER,
  CORRECT_ANSWER,
  NEXT,
  // Countdown
  COUNTDOWN,
  // End phase
  END,
  // Error messages
  ERR_1,
}

/**
 * Length of the answer given
 * compared to the series
 */
export enum AnswerLength {
  EQUAL,
  SMALLER,
  GREATER
}

@Component({
  selector: 'app-direct-numbers-exercise',
  templateUrl: './direct-numbers-exercise.component.html',
  styleUrls: ['./direct-numbers-exercise.component.scss'],
})
export class DirectNumbersExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  private userId: number;
  private exerciseAttributes: ExerciseAttributes;
  /**
   * Direct Numbers Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private actualDemoSeries: number;
  private actualSeries: number;
  private actualChar: string;
  private actualCharPos: number;
  private duringDemo: boolean;
  private timeChangeChar: number;
  private answer: string;
  private score: Score;
  /**
   * Timer variables
   */
  private interval;
  private cdInterval;
  private countdownTimeLeft: number;
  /**
   * Images
   */
  private imgs: IdImage[];

  constructor(
    private directNumbersService: DirectNumbersService,
    private exerciseResultsService: ExerciseResultsService
  ) {
    exerciseManager.exerciseInfo.subscribe( data => {
      this.userId = data.userId;
      this.exerciseAttributes = data.attributes;
    });
  }

  ngOnInit() {
    this.directNumbersService.queryImages().subscribe( res => {
      this.imgs = res;
    });

    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();
    this.countdownTimeLeft = 3;
    this.actualDemoSeries = 1;
    this.actualSeries = 1;
    this.duringDemo = false;
    this.actualChar = '';
    this.actualCharPos = 0;
    this.timeChangeChar = 0;
    this.answer = '';
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
   * Gets an image by its id
   */
  private getImage(id: string) {
    return {
      ...this.imgs.find(img => {
        return img.id === id;
      })
    };
  }

  /**
   * Starts the demo
   */
  private startDemo(): void {
    this.exercisePhase = ExercisePhase.DEMO_INTRO;
    this.changeAssistantText();
    this.duringDemo = true;
  }

  /**
   * Watches the series
   */
  private watchSeries(): void {
    // If the user fails during demo, reset it
    if (this.exercisePhase === ExercisePhase.ERR_1) {
      this.actualDemoSeries = 1;
    }
    this.exercisePhase = ExercisePhase.WATCH;
    this.changeAssistantText();
    // Character display variables
    this.timeChangeChar = 0;
    this.actualCharPos = 0;
    this.actualChar = '';
    this.answer = '';
    this.characterChange();
  }

  /**
   * Changes the characters and controls the time
   * that passes between each character change
   */
  private characterChange(): void {
    // Get first character
    if (this.duringDemo) {
      this.actualChar = this.directNumbersService.getDemoSeriesSeries(this.actualDemoSeries).charAt(0);
      ++this.actualCharPos;
      this.timeChangeChar = 1;
    } else {
      this.actualChar = this.directNumbersService.getSeriesSeries(this.actualSeries).charAt(this.actualCharPos);
      ++this.actualCharPos;
      this.timeChangeChar = 1;
    }
    // Start the interval
    this.interval = setInterval(() => {
      if (!this.duringDemo) {
      }
      if (this.timeChangeChar > 0) {
        this.timeChangeChar--;
      } else {
        // Demo series
        if (this.duringDemo) {
          if (this.directNumbersService.getDemoSeriesSeries(this.actualDemoSeries).length > this.actualCharPos) {
            this.actualChar = this.directNumbersService.getDemoSeriesSeries(this.actualDemoSeries).charAt(this.actualCharPos);
            ++this.actualCharPos;
            this.timeChangeChar = 1;
          } else {
            this.exercisePhase = ExercisePhase.ANSWER_DEMO;
            this.changeAssistantText();
            this.pauseTimer();
          }
        } else { // Exercise series
          if (this.directNumbersService.getSeriesSeries(this.actualSeries).length > this.actualCharPos) {
            this.actualChar = this.directNumbersService.getSeriesSeries(this.actualSeries).charAt(this.actualCharPos);
            ++this.actualCharPos;
            this.timeChangeChar = 1;
          } else {
            this.exercisePhase = ExercisePhase.ANSWER;
            this.changeAssistantText();
            this.pauseTimer();
          }
        }
      }
    }, 1000);
  }

  /**
   * Types '1' into the answer
   */
  private answer1(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += '1';
    }
  }

  /**
   * Types '2' into the answer
   */
  private answer2(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += '2';
    }
  }

  /**
   * Types '3' into the answer
   */
  private answer3(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += '3';
    }
  }

  /**
   * Types '4' into the answer
   */
  private answer4(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += '4';
    }
  }

  /**
   * Types '5' into the answer
   */
  private answer5(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += '5';
    }
  }

  /**
   * Types '6' into the answer
   */
  private answer6(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += '6';
    }
  }

  /**
   * Types '7' into the answer
   */
  private answer7(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += '7';
    }
  }

  /**
   * Types '8' into the answer
   */
  private answer8(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += '8';
    }
  }

  /**
   * Types '9' into the answer
   */
  private answer9(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += '9';
    }
  }

  /**
   * Deletes last char of the answer
   */
  private deleteLastChar(): void {
    this.answer = this.answer.substring(0, this.answer.length - 1);
  }

  /**
   * Checks if the answer's length is the same as the series
   * True if is the same
   */
  private checkAnswerLength(): AnswerLength {
    if (this.duringDemo) {
      if (this.answer.length === this.directNumbersService.getDemoSeriesSeries(this.actualDemoSeries).length) {
        return AnswerLength.EQUAL;
      } else if (this.answer.length <= this.directNumbersService.getDemoSeriesSeries(this.actualDemoSeries).length) {
        return AnswerLength.SMALLER;
      } else {
        return AnswerLength.GREATER;
      }
    } else {
      if (this.answer.length === this.directNumbersService.getSeriesSeries(this.actualSeries).length) {
        return AnswerLength.EQUAL;
      } else if (this.answer.length <= this.directNumbersService.getSeriesSeries(this.actualSeries).length) {
        return AnswerLength.SMALLER;
      } else {
        return AnswerLength.GREATER;
      }
    }
  }

  /**
   * Checks if the answer is correct
   */
  private checkAnswer(): void {
    // Demo
    if (this.duringDemo) {
      // If correct
      if (this.answer === this.directNumbersService.getDemoSeriesSeries(this.actualDemoSeries)) {
        this.exercisePhase = ExercisePhase.CORRECT_ANSWER;
        this.changeAssistantText();
      } else {
        this.exercisePhase = ExercisePhase.ERR_1;
        this.changeAssistantText();
      }
    } else { // Exercise series
      // If correct
      if (this.answer === this.directNumbersService.getSeriesSeries(this.actualSeries)) {
        ++this.score.correctCount;
      } else {
        ++this.score.failCount;
      }
      this.exercisePhase = ExercisePhase.NEXT;
      this.changeAssistantText();
    }
  }

  /**
   * Gets the next series
   */
  private nextSeries(): void {
    if (this.duringDemo) {
      // Get next series
      if (this.directNumbersService.getDemoSeriesLength() > this.actualDemoSeries) {
        ++this.actualDemoSeries;
        this.watchSeries();
      } else { // If any are left, start exercise
        this.exercisePhase = ExercisePhase.DEMO_END;
        this.changeAssistantText();
        this.duringDemo = false;
      }
    } else {
      if (this.directNumbersService.getSeriesLength() > this.actualSeries) {
        ++this.actualSeries;
        this.watchSeries();
      } else { // If any are left, end exercise
        this.exercisePhase = ExercisePhase.END;
        this.changeAssistantText();
      }
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
        this.watchSeries();
        clearInterval(this.cdInterval);
        this.cdInterval = 0;
      }
    }, 1000);
  }

  /**
   * Pauses the timer
   */
  private pauseTimer(): void {
    clearInterval(this.interval);
    this.interval = 0;
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
        titleA = '¡Dictado de Números!';
        descriptionA = 'Este ejercicio sirve para medir como está tu memoria. Para ello te mostraré varios números en una ' +
          'pizarra como la de abajo. Irán apareciendo de uno en uno, de manera que deberás ir memorizándolos para después ' +
          'marcarlos en el mismo orden en que te los mostré. Si en algún momento te equivocas podrás pulsar el botón Borrar. ' +
          'Cuando estés listo, pulsa en Continuar.';
        break;
      case ExercisePhase.DEMO_INTRO:
        showA = true;
        titleA = '¡Dictado de Números!';
        descriptionA = 'Ahora vamos a hacer tres pruebas. Se escribirán secuencias de números y se mostrará un panel para que ' +
          'los escribas en el mismo orden en el que se te mostraron. Cuando estés listo, pulsa en Continuar.';
        break;
      case ExercisePhase.ANSWER_DEMO:
        showA = true;
        titleA = '¡Dictado de Números!';
        descriptionA = 'Introduce los números en el mismo orden en el que se te mostraron en la pizarra.';
        break;
      case ExercisePhase.DEMO_END:
        showA = true;
        titleA = '¡Dictado de Números!';
        descriptionA = 'Has finalizado la prueba correctamente, ¡Enhorabuena! Ahora comenzarás el ejercicio. Cuando estés listo, ' +
          'pulsa el botón Comenzar ejercicio.';
        break;
      case ExercisePhase.WATCH:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.ANSWER:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.CORRECT_ANSWER:
        showA = true;
        titleA = '¡Dictado de Números!';
        descriptionA = 'Introduce los números en el mismo orden en el que se te mostraron en la pizarra.';
        break;
      case ExercisePhase.NEXT:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.COUNTDOWN:
        showA = true;
        titleA = 'Vamos a comenzar el ejercicio en:';
        descriptionA = '';
        break;
      case ExercisePhase.ERR_1:
        showA = true;
        titleA = '¡Dictado de Números!';
        descriptionA = 'Pulsa el botón Listo para continuar, o pulsa el botón Borrar si quieres corregir los números que hayas marcado.';
        break;
      case ExercisePhase.END:
        showA = true;
        titleA = '¡Enhorabuena! ¡Lo has hecho muy bien!';
        descriptionA = '{{ medalla }} Has acertado: ' + this.score + ' veces.';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {NumbersAndVowelsService} from '../../../services/exercises/numbers-and-vowels.service';
import {ExerciseAttributes} from '../../../classes/exercise-attributes';
import {IdImage} from '../../../classes/image';

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
  selector: 'app-numbers-and-vowels-exercise',
  templateUrl: './numbers-and-vowels-exercise.component.html',
  styleUrls: ['./numbers-and-vowels-exercise.component.scss'],
})
export class NumbersAndVowelsExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
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
  private score: number;
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

  constructor(private numbersAndVowelsService: NumbersAndVowelsService) {
    exerciseManager.exerciseInfo.subscribe( data => {
      this.exerciseAttributes = data;
    });
  }

  ngOnInit() {
    this.numbersAndVowelsService.queryImages().subscribe( res => {
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
    this.score = 0;
  }

  /**
   * Ends the exercise notifying the session
   */
  private endExercise(): void {
    exerciseManager.notifyEnd({
      id: this.exerciseAttributes.id,
      score: this.score,
      success: true
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
      this.actualChar = this.numbersAndVowelsService.getDemoSeriesSeries(this.actualDemoSeries).charAt(0);
      ++this.actualCharPos;
      this.timeChangeChar = 1;
    } else {
      this.actualChar = this.numbersAndVowelsService.getSeriesSeries(this.actualSeries).charAt(this.actualCharPos);
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
          if (this.numbersAndVowelsService.getDemoSeriesSeries(this.actualDemoSeries).length > this.actualCharPos) {
            this.actualChar = this.numbersAndVowelsService.getDemoSeriesSeries(this.actualDemoSeries).charAt(this.actualCharPos);
            ++this.actualCharPos;
            this.timeChangeChar = 1;
          } else {
            this.exercisePhase = ExercisePhase.ANSWER_DEMO;
            this.changeAssistantText();
            this.pauseTimer();
          }
        } else { // Exercise series
          if (this.numbersAndVowelsService.getSeriesSeries(this.actualSeries).length > this.actualCharPos) {
            this.actualChar = this.numbersAndVowelsService.getSeriesSeries(this.actualSeries).charAt(this.actualCharPos);
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
   * Types 'a' into the answer
   */
  private answerA(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += 'a';
    }
  }

  /**
   * Types 'e' into the answer
   */
  private answerE(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += 'e';
    }
  }

  /**
   * Types 'i' into the answer
   */
  private answerI(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += 'i';
    }
  }

  /**
   * Types 'o' into the answer
   */
  private answerO(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += 'o';
    }
  }

  /**
   * Types 'u' into the answer
   */
  private answerU(): void {
    if (this.checkAnswerLength() === AnswerLength.SMALLER) {
      this.answer += 'u';
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
      if (this.answer.length === this.numbersAndVowelsService.getDemoSeriesSeries(this.actualDemoSeries).length) {
        return AnswerLength.EQUAL;
      } else if (this.answer.length <= this.numbersAndVowelsService.getDemoSeriesSeries(this.actualDemoSeries).length) {
        return AnswerLength.SMALLER;
      } else {
        return AnswerLength.GREATER;
      }
    } else {
      if (this.answer.length === this.numbersAndVowelsService.getSeriesSeries(this.actualSeries).length) {
        return AnswerLength.EQUAL;
      } else if (this.answer.length <= this.numbersAndVowelsService.getSeriesSeries(this.actualSeries).length) {
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
      if (this.answer === this.numbersAndVowelsService.getDemoSeriesCorrectAnswer(this.actualDemoSeries)) {
        this.exercisePhase = ExercisePhase.CORRECT_ANSWER;
        this.changeAssistantText();
      } else {
        this.exercisePhase = ExercisePhase.ERR_1;
        this.changeAssistantText();
      }
    } else { // Exercise series
      // If correct
      if (this.answer === this.numbersAndVowelsService.getSeriesCorrectAnswer(this.actualSeries)) {
        ++this.score;
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
      if (this.numbersAndVowelsService.getDemoSeriesLength() > this.actualDemoSeries) {
        ++this.actualDemoSeries;
        this.watchSeries();
      } else { // If any are left, start exercise
        this.exercisePhase = ExercisePhase.DEMO_END;
        this.changeAssistantText();
        this.duringDemo = false;
      }
    } else {
      if (this.numbersAndVowelsService.getSeriesLength() > this.actualSeries) {
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
        titleA = '¡Dictado de Números y Vocales!';
        descriptionA = 'En este ejercicio te mostraré una pizarra donde aparecerán varias vocales y números que tendrás ' +
          'que memorizar. Te los mostraré de uno en uno y cuando termine tendrás que introducir siempre en primer lugar ' +
          'los números del más pequeño al más grande, y después las vocales siguiendo el orden a, e, i, o, u. Si en algún ' +
          'momento te equivocas  podrás pulsar en el botón Borrar.';
        break;
      case ExercisePhase.DEMO_INTRO:
        showA = true;
        titleA = '¡Dictado de Números y Vocales!';
        descriptionA = 'Ahora vamos a hacer tres pruebas. Se escribirán secuencias de números y vocales. Luego se mostrará ' +
          'un panel para que los escribas primero los números del más pequeño al más grande y luego todas las vocales en ' +
          'orden aeiou. Cuando estés listo, pulsa el botón Continuar.';
        break;
      case ExercisePhase.ANSWER_DEMO:
        showA = true;
        titleA = '¡Dictado de Números y Vocales!';
        descriptionA = 'Introduce primero los números que se mostraron en la pizarra del más pequeño al más grande y luego las ' +
          'vocales en orden aeiou.';
        break;
      case ExercisePhase.DEMO_END:
        showA = true;
        titleA = '¡Dictado de Números y Vocales!';
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
        titleA = '¡Dictado de Números y Vocales!';
        descriptionA = 'Introduce primero los números que se mostraron en la pizarra del más pequeño al más grande y luego las ' +
          'vocales en orden aeiou.';
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
        titleA = '¡Dictado de Números y Vocales!';
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

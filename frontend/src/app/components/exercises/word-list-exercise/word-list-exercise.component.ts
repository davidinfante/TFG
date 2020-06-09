import {Component, Input, OnInit} from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {WordListService} from '../../../services/exercises/word-list.service';
import {FunctionsService} from '../../../services/functions.service';
import {ExerciseAttributes} from '../../../classes/exercise-attributes';

/**
 * Phase of the exercise
 */
export enum ExercisePhase {
  INTRO,
  COUNTDOWN,
  READ,
  WRITE,
  REPEAT,
  END
}

@Component({
  selector: 'app-word-list-exercise',
  templateUrl: './word-list-exercise.component.html',
  styleUrls: ['./word-list-exercise.component.scss'],
})
/**
 * Word List Exercise, shows a list of words that
 * must be memorized
 */
export class WordListExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  private exerciseAttributes: ExerciseAttributes;
  /**
   * Word List Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private answeredList: string[];
  @Input() answer: string;
  private repetition: number;
  private score: number;
  /**
   * Timer variables
   */
  private timeLeft: number;
  private interval;
  private countdownTimeLeft: number;

  constructor(
    private wordListService: WordListService,
    private functionsService: FunctionsService
  ) {
    // Get Exercise Attributes from the session
    exerciseManager.exerciseInfo.subscribe( data => {
      this.exerciseAttributes = data;
    });
  }

  ngOnInit() {
    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();
    this.countdownTimeLeft = 3;
    this.timeLeft = this.exerciseAttributes.duration;
    this.answeredList = [];
    this.repetition = 0;
    this.score = 0;
  }

  /**
   * Begin the exercise's countdown
   */
  private startExercise(): void {
    this.exercisePhase = ExercisePhase.COUNTDOWN;
    this.changeAssistantText();
    this.startCountdown();
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
   * Checks if the answer is included in the answerList array
   * and if it hasn't been answered yet
   */
  private checkAnswer(): void {
    // Lower case and remove accents
    const answer = this.functionsService.lowerCaseRemoveAccents(this.answer);
    // If the inputted word is correct and hasn't been answered
    const correct = this.wordListService.getAnswerList().includes(answer) && !this.answeredList.includes(answer);
    if (correct) {
      this.answeredList.push(answer);
      ++this.score;
    }
    this.answer = null;
  }

  /**
   * Changes the phase to REPEAT
   */
  private repeat(): void {
    // If repetitions haven't been reached yet
    if (this.repetition < this.exerciseAttributes.repetitions) {
      this.exercisePhase = ExercisePhase.REPEAT;
      this.changeAssistantText();
    } else {
      this.exercisePhase = ExercisePhase.END;
      this.changeAssistantText();
    }
  }

  /**
   * Starts the countdown before showing the list
   */
  private startCountdown(): void {
    this.interval = setInterval(() => {
      if (this.countdownTimeLeft > 0) {
        this.countdownTimeLeft--;
      } else {
        this.pauseTimer();
        this.exercisePhase = ExercisePhase.READ;
        this.changeAssistantText();
        this.startTimer();
      }
    }, 1000);
  }

  /**
   * Starts the timer during the exercise
   */
  private startTimer(): void {
    ++this.repetition;
    this.exercisePhase = ExercisePhase.READ;
    this.changeAssistantText();

    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.exercisePhase = ExercisePhase.WRITE;
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
    this.timeLeft = this.exerciseAttributes.duration;
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
        titleA = '¡Lista de palabras!';
        descriptionA = 'En este ejercicio te mostraré  una lista de palabras que tendrás que memorizar durante un minuto. ' +
          'Una vez transcurrido ese tiempo, tendrás que escribir las palabras que recuerdes sin importar el orden y las ' +
          'faltas de ortografía. Lo importante es que sepamos cuáles recuerdas, aunque no escribas las palabras completas. ' +
          'Debes intentar ser rápido al escribirlas para que no se te olvide ninguna. Lo harás tres veces de manera que puedas ' +
          'aprenderlas. Cuando estés listo pulsa Continuar.';
        break;
      case ExercisePhase.COUNTDOWN:
        showA = true;
        titleA = 'Vamos a comenzar el ejercicio en:';
        descriptionA = '';
        break;
      case ExercisePhase.WRITE:
        showA = true;
        titleA = 'Escriba las palabras';
        descriptionA = 'A continuación, escribe una a una las palabras que recuerdes sin importar el orden. Para ello, introduce ' +
          'cada palabra en el recuadro de abajo y pulsa Escribir Siguiente Palabra. Cuando hayas terminado pulsa No recuerdo ' +
          'más palabras.';
        break;
      case ExercisePhase.REPEAT:
        showA = true;
        titleA = 'Escriba las palabras';
        descriptionA = 'Se te va a mostrar de nuevo la lista inicial, para que trates de memorizarla otra vez.';
        break;
      case ExercisePhase.END:
        showA = true;
        titleA = 'Fin del ejercicio';
        descriptionA = '{{ medalla }} Has acertado: ' + this.score + ' palabras';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }
}

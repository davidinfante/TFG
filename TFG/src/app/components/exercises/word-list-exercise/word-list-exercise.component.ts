import {Component, Input, OnInit} from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {DurationKind} from '../../../enum/duration-kind.enum';

/**
 * Phase of the exercise
 */
export enum ExercisePhase {
  INTRO,
  COUNTDOWN,
  READ,
  WRITE
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
  private id: string;
  private type: number;
  private duration: number;
  private maxTime: number;
  private dependsOn: number;
  private repetitions: number;
  private durationKind: DurationKind;
  /**
   * Word List Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private wordList: string[] = ['Buitre', 'Clavel', 'Licor', 'Silla', 'Orquídea', 'Águila', 'Lámpara', 'Anís', 'Pavo', 'Armario', 'Jazmín', 'Coñac'];
  private answeredList: string[];
  @Input() answer: string;
  /**
   * Timer variables
   */
  private timeLeft: number;
  private interval;
  private countdownTimeLeft: number;

  constructor() {
    // Get Exercise Attributes from the session
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
    this.countdownTimeLeft = 3;
    this.timeLeft = this.duration;
    this.answeredList = [];
    this.changeAssistantText();
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
        titleA = '¡Lista de palabras!';
        descriptionA = 'Memoriza las palabras de la lista y cuando acabe el tiempo intenta escribir tantas como puedas. Pulsa comenzar cuando estés listo.';
        break;
      case ExercisePhase.COUNTDOWN:
        showA = true;
        titleA = 'El ejercicio comenzará en:';
        descriptionA = '';
        break;
      case ExercisePhase.WRITE:
        showA = true;
        titleA = 'Escriba las palabras';
        descriptionA = 'Escriba una palabra y pulse en "Escribir Siguiente Palabra" para escribir otra palabra.\n' +
          'Cuando no recuerde más palabaras pulse "No recuerdo más palabras".';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }

  /**
   * Checks if the answer is included in the wordList array
   * and if it hasn't been answered yet
   */
  private checkAnswer(): void {
    // If the inputted word is correct and hasn't been answered
    const correct = this.wordList.includes(this.answer) && !this.answeredList.includes(this.answer);
    if (correct) {
      this.answeredList.push(this.answer);
      // Get score maybe
    }
    this.answer = null;
  }

  /**
   * Starts the countdown before showing the list
   */
  private startCountdown(): void {
    this.interval = setInterval(() => {
      if (this.countdownTimeLeft > 0) {
        this.countdownTimeLeft--;
      } else {
        this.exercisePhase = ExercisePhase.READ;
        this.pauseTimer();
        this.startTimer();
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
  }


}

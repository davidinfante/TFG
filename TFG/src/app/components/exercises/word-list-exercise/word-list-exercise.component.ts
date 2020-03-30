import {Component, Input, OnInit} from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';

/**
 * Phase of the exercise
 */
export enum ExercisePhase {
  INTRO,
  READ,
  WRITE
}

@Component({
  selector: 'app-word-list-exercise',
  templateUrl: './word-list-exercise.component.html',
  styleUrls: ['./word-list-exercise.component.scss'],
})
export class WordListExerciseComponent implements OnInit {
  private exercisePhase: ExercisePhase;
  private wordList: string[] = ['hola', 'esto', 'es', 'una', 'prueba'];
  private answeredList: string[];
  @Input() answer: string;
  /**
   * Timer variables
   */
  private totalTime = 1;
  private timeLeft: number;
  private interval;

  constructor() { }

  ngOnInit() {
    this.exercisePhase = ExercisePhase.INTRO;
    this.timeLeft = this.totalTime;
    this.answeredList = [];
  }

  /**
   * Begin the exercise
   */
  startExercise() {
    this.exercisePhase = ExercisePhase.READ;
    this.startTimer();
  }

  /**
   * Ends the exercise
   */
  endExercise() {
    exerciseManager.notify({
      class: this.constructor.name,
      success: true
    });
  }

  /**
   * Checks if the answer is included in the wordList array
   */
  checkAnswer() {
    // If the inputted word is correct and hasn't been answered
    const correct = this.wordList.includes(this.answer) && !this.answeredList.includes(this.answer);
    if (correct) {
      this.answeredList.push(this.answer);
      // Get score maybe
    }
  }

  /**
   * Starts the timer
   */
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.exercisePhase = ExercisePhase.WRITE;
        this.pauseTimer();
      }
    }, 1000);
  }

  /**
   * Pauses the timer
   */
  pauseTimer() {
    clearInterval(this.interval);
  }


}

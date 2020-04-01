import {Component, Input, OnInit} from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {DurationKind} from '../../../enum/duration-kind.enum';

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
  private id: string;
  private type: number;
  private duration: number;
  private maxTime: number;
  private dependsOn: number;
  private repetitions: number;
  private durationKind: DurationKind;

  private exercisePhase: ExercisePhase;
  private wordList: string[] = ['hola', 'esto', 'es', 'una', 'prueba'];
  private answeredList: string[];
  @Input() answer: string;
  /**
   * Timer variables
   */
  private timeLeft: number;
  private interval;

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

  ngOnInit() {
    this.exercisePhase = ExercisePhase.INTRO;
    this.timeLeft = this.duration;
    this.answeredList = [];
  }

  /**
   * Begin the exercise
   */
  private startExercise() {
    this.exercisePhase = ExercisePhase.READ;
    this.startTimer();
  }

  /**
   * Ends the exercise
   */
  private endExercise() {
    exerciseManager.notifyEnd({
      id: this.id,
      success: true
    });
  }

  /**
   * Checks if the answer is included in the wordList array
   */
  private checkAnswer() {
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
  private startTimer() {
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
  private pauseTimer() {
    clearInterval(this.interval);
  }


}

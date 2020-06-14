import { Component, OnInit } from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {SemanticSeriesService} from '../../../services/exercises/semantic-series.service';
import {ExerciseAttributes} from '../../../classes/exercise-attributes';
import {ExerciseResultsService} from '../../../services/exercise-results.service';
import {Score} from '../../../classes/score';
import {MedalsService} from '../../../services/medals.service';

/**
 * Phase of the exercise
 */
export enum ExercisePhase {
  INTRO,
  COUNTDOWN,
  EXERCISE,
  END
}

@Component({
  selector: 'app-semantic-series-exercise',
  templateUrl: './semantic-series-exercise.component.html',
  styleUrls: ['./semantic-series-exercise.component.scss'],
})
export class SemanticSeriesExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  private userId: number;
  private exerciseAttributes: ExerciseAttributes;
  /**
   * Semantic Series Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private actualSeries: number;
  private radioValue: string;
  private checkedAnswer: boolean;
  private continueButton: boolean;
  private score: Score;
  private medal: string;
  /**
   * Timer variables
   */
  private interval;
  private countdownTimeLeft: number;

  constructor(
    private semanticSeriesService: SemanticSeriesService,
    private exerciseResultsService: ExerciseResultsService,
    private medalsService: MedalsService
  ) {
    exerciseManager.exerciseInfo.subscribe( data => {
      this.userId = data.userId;
      this.exerciseAttributes = data.attributes;
    });
  }

  ngOnInit() {
    this.actualSeries = 0;
    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();
    this.countdownTimeLeft = 3;
    this.radioValue = null;
    this.checkedAnswer = false;
    this.continueButton = false;
    this.score = new Score();
  }

  /**
   * Begin the exercise's countdown
   */
  private startExercise(): void {
    this.exercisePhase = ExercisePhase.COUNTDOWN;
    // Reset ready button visibility
    this.continueButton = false;
    // Reset radio button value
    this.radioValue = null;
    // Enable radio buttons
    this.checkedAnswer = false;
    // Get next series
    ++this.actualSeries;
    this.changeAssistantText();
    this.startCountdown();
  }

  /**
   * Get the next series in the list and display it
   */
  private nextSeries(): void {
    if (this.actualSeries < this.semanticSeriesService.getSemanticSeriesLength() - 1) {
      // Reset ready button visibility
      this.continueButton = false;
      // Reset radio button value
      this.radioValue = null;
      // Get next series
      ++this.actualSeries;
      // Enable radio buttons
      this.checkedAnswer = false;
    } else {
      this.exercisePhase = ExercisePhase.END;
      this.createMedal();
      this.changeAssistantText();
    }
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
   * Starts the countdown before starting the exercise
   */
  private startCountdown(): void {
    this.interval = setInterval(() => {
      if (this.countdownTimeLeft > 0) {
        this.countdownTimeLeft--;
      } else {
        this.exercisePhase = ExercisePhase.EXERCISE;
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

  /**
   * Check's if the answer is correct
   */
  private checkAnswer(): void {
    // Detects if the selected answer is correct
    if (this.radioValue === this.semanticSeriesService.getCorrectOptionValue(this.actualSeries)) {
      ++this.score.correctCount;
    } else {
      ++this.score.failCount;
    }
    // Change the answer buttons color
    this.semanticSeriesService.changeButtonsColor(this.actualSeries);
    // Disable radio buttons
    this.checkedAnswer = true;
    // Change the Done button to Continue button
    this.continueButton = true;
  }

  /**
   * Requests a medal for this exercise
   */
  private createMedal(): void {
    this.score.finalScore = (this.score.correctCount * 10) / (this.score.correctCount + this.score.failCount);
    this.medalsService.createMedal(this.userId, this.exerciseAttributes.id, this.score.finalScore).subscribe( res => {
      this.getMedal();
    });
  }

  /**
   * Gets the medal for this exercise
   */
  private getMedal(): void {
    this.medalsService.getMedal(this.userId, this.exerciseAttributes.id).subscribe( res => {
      this.medal = res.medal;
      this.changeAssistantText();
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
        titleA = '¿Qué palabra sobra?';
        descriptionA = '¡Genial! Vamos a realizar un ejercicio de razonamiento. En este ejercicio te presentaré una serie ' +
          'de palabras. Entre ellas hay una que no está relacionada con las demás. Recuerda, cuando comiences el ejercicio, ' +
          'deberás seleccionar la palabra que consideres correcta y pulsar el botón Listo. Dispondrás de un botón Ayuda, por si ' +
          'necesitas alguna pista, pero ¡es mejor si lo intentas hacer tú solo! Cuando estés listo pulsa Continuar.';
        break;
      case ExercisePhase.COUNTDOWN:
        showA = true;
        titleA = 'Vamos a comenzar el ejercicio en:';
        descriptionA = '';
        break;
      case ExercisePhase.EXERCISE:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.END:
        showA = true;
        titleA = '¡Enhorabuena! ¡Lo has hecho muy bien!';
        descriptionA = 'Has conseguido una medalla de: ' + this.medal;
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }
}

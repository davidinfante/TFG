import {Component, OnInit} from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {LogicalSeriesService} from '../../../services/exercises/logical-series.service';
import {ExerciseAttributes} from '../../../classes/exercise-attributes';
import {IdImage} from '../../../classes/image';
import {ExerciseResultsService} from '../../../services/exercise-results.service';
import {Score} from '../../../classes/score';
import {MedalsService} from '../../../services/medals.service';

/**
 * Phases of the exercise
 */
export enum ExercisePhase {
  INTRO,
  DEMO,
  COUNTDOWN,
  EXERCISE,
  END
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
 * Has demo
 */
export class LogicalSeriesExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  private userId: number;
  private exerciseAttributes: ExerciseAttributes;
  /**
   * Local Series Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private actualSeries: number;
  private radioValue: string;
  private continueButton: boolean;
  private checkedAnswer: boolean;
  private score: Score;
  private medal: string;
  /**
   * Place holder image variables
   */
  private placeholderSrc: string;
  private placeholderH: number;
  private placeholderW: number;
  private showPlaceholder: boolean;
  /**
   * Timer variables
   */
  private interval;
  private countdownTimeLeft: number;
  /**
   * Images
   */
  private imgs: IdImage[];

  constructor(
    private logicalSeriesService: LogicalSeriesService,
    private exerciseResultsService: ExerciseResultsService,
    private medalsService: MedalsService
  ) {
    exerciseManager.exerciseInfo.subscribe( data => {
      this.userId = data.userId;
      this.exerciseAttributes = data.attributes;
    });
  }

  ngOnInit() {
    this.logicalSeriesService.queryImages().subscribe( res => {
      this.imgs = res;
    });

    this.actualSeries = 0;
    this.continueButton = false;
    this.radioValue = null;
    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();
    this.countdownTimeLeft = 3;
    this.showPlaceholder = true;
    this.checkedAnswer = false;
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
   * Begin the exercise's demo
   */
  private startDemo(): void {
    this.exercisePhase = ExercisePhase.DEMO;
    this.changeAssistantText();
    this.changePlaceHolderImg();
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
    // Get next series
    ++this.actualSeries;
    // Enable radio buttons
    this.checkedAnswer = false;
    // Get placeholder image
    this.changePlaceHolderImg();
    this.changeAssistantText();
    this.startCountdown();
  }

  /**
   * Get the next series in the list and display it
   */
  private nextSeries(): void {
    if (this.actualSeries < this.logicalSeriesService.getLogicalSeriesLength() - 1) {
      // Reset ready button visibility
      this.continueButton = false;
      // Reset radio button value
      this.radioValue = null;
      // Get next series
      ++this.actualSeries;
      // Enable radio buttons
      this.checkedAnswer = false;
      // Get placeholder image
      this.changePlaceHolderImg();
    } else {
      this.exercisePhase = ExercisePhase.END;
      this.createMedal();
      this.changeAssistantText();
    }
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
    if (this.exercisePhase === ExercisePhase.EXERCISE) {
      if (this.radioValue === this.logicalSeriesService.getCorrectOptionValue(this.actualSeries)) {
        ++this.score.correctCount;
      } else {
        ++this.score.failCount;
      }
    }
    // Change the answer buttons color
    this.logicalSeriesService.changeButtonsColor(this.actualSeries);
    // Change the placeholder image
    this.changePlaceHolderImg();
    // Disable radio buttons
    this.checkedAnswer = true;
    // Change the Done button to Continue button
    this.continueButton = true;
  }

  /**
   * Changes the placeholder image with the correct answer
   * and vice versa
   */
  private changePlaceHolderImg(): void {
    if (this.showPlaceholder) {
      this.placeholderSrc = this.getImage('placeholder').img.src;
      this.placeholderH = this.getImage('placeholder').img.height;
      this.placeholderW = this.getImage('placeholder').img.width;
    } else {
      this.placeholderSrc = this.getImage(this.logicalSeriesService.getCorrectOptionId(this.actualSeries).id).img.src;
      this.placeholderH = this.getImage(this.logicalSeriesService.getCorrectOptionId(this.actualSeries).id).img.height;
      this.placeholderW = this.getImage(this.logicalSeriesService.getCorrectOptionId(this.actualSeries).id).img.width;
    }
    /**
     * Get placeholder the first time it's called
     * and the answer the second
     */
    this.showPlaceholder = !this.showPlaceholder;
  }

  /**
   * Requests a medal for this exercise
   */
  private createMedal(): void {
    this.score.finalScore = (this.score.correctCount * 10) / (this.score.correctCount + this.score.failCount + this.score.omissionCount);
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

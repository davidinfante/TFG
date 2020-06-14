import { Component, OnInit } from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {ClassifyObjectsService} from '../../../services/exercises/classify-objects.service';
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
  DEMO1,
  DEMO2,
  DEMO_EXERCISE,
  DEMO_END,
  EXERCISE_INTRO,
  COUNTDOWN,
  MEMORIZE,
  ANSWER,
  SCORE,
  NEXT,
  END
}

@Component({
  selector: 'app-classify-objects-exercise',
  templateUrl: './classify-objects-exercise.component.html',
  styleUrls: ['./classify-objects-exercise.component.scss'],
})
export class ClassifyObjectsExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  private userId: number;
  private exerciseAttributes: ExerciseAttributes;
  /**
   * Direct Numbers Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private actualSeries: number;
  private score: Score;
  private medal: string;
  /**
   * Timer variables
   */
  private interval;
  private countdownTimeLeft: number;
  private timeLeft: number;
  /**
   * Images
   */
  private imgs: IdImage[];

  constructor(
    private classifyObjectsService: ClassifyObjectsService,
    private exerciseResultsService: ExerciseResultsService,
    private medalsService: MedalsService
  ) {
    exerciseManager.exerciseInfo.subscribe( data => {
      this.userId = data.userId;
      this.exerciseAttributes = data.attributes;
    });
  }

  ngOnInit() {
    this.classifyObjectsService.queryImages().subscribe( res => {
      this.imgs = res;
    });

    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();

    this.actualSeries = 0;
    this.score = new Score();

    // Initialize timer values
    this.pauseTimer();
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
   * Changes the demo phase
   */
  private changeDemoPhase(): void {
    switch (this.exercisePhase) {
      case ExercisePhase.INTRO:
        this.exercisePhase = ExercisePhase.DEMO1;
        break;
      case ExercisePhase.DEMO1:
        this.exercisePhase = ExercisePhase.DEMO2;
        break;
      case ExercisePhase.DEMO2:
        this.exercisePhase = ExercisePhase.DEMO_EXERCISE;
        break;
      case ExercisePhase.DEMO_EXERCISE:
        this.exercisePhase = ExercisePhase.DEMO_END;
        break;
      case ExercisePhase.DEMO_END:
        this.exercisePhase = ExercisePhase.EXERCISE_INTRO;
        break;
    }
    this.changeAssistantText();
  }

  /**
   * Checks if the demo answer is correct
   * and advances to next phase
   */
  private demoCheckAnswer(): void {
    if (this.classifyObjectsService.demoCheckAnswer()) {
      this.changeDemoPhase();
    }
  }

  /**
   * Gets the next exercise series
   */
  private next(): void {
    if (this.actualSeries < this.classifyObjectsService.getSeriesLength() - 1) {
      this.exercisePhase = ExercisePhase.NEXT;
      this.changeAssistantText();
      ++this.actualSeries;
    } else {
      this.exercisePhase = ExercisePhase.END;
      this.createMedal();
      this.changeAssistantText();
    }
  }

  /**
   * Starts the memorize phase
   */
  private memorize(): void {
    this.exercisePhase = ExercisePhase.MEMORIZE;
    this.changeAssistantText();
    this.startTimer();
  }

  /**
   * Check's the answers
   */
  private checkAnswer(): void {
    this.score.correctCount += this.classifyObjectsService.numberOfCorrectAnswers(this.actualSeries).matches;
    this.score.failCount += this.classifyObjectsService.numberOfCorrectAnswers(this.actualSeries).errors;
    this.score.omissionCount += (this.classifyObjectsService.numberOfCorrectOptions(this.actualSeries) -
      this.classifyObjectsService.numberOfCorrectAnswers(this.actualSeries).matches);

    this.exercisePhase = ExercisePhase.SCORE;
    this.changeAssistantText();
  }

  /**
   * Starts the countdown before starting the exercise
   */
  private startCountdown(): void {
    this.exercisePhase = ExercisePhase.COUNTDOWN;
    this.changeAssistantText();

    this.interval = setInterval(() => {
      if (this.countdownTimeLeft > 0) {
        this.countdownTimeLeft--;
      } else {
        this.pauseTimer();
        this.memorize();
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
        this.pauseTimer();
        this.exercisePhase = ExercisePhase.ANSWER;
        this.changeAssistantText();
      }
    }, 1000);
  }

  /**
   * Pauses the timer
   */
  private pauseTimer(): void {
    clearInterval(this.interval);
    this.countdownTimeLeft = 3;
    if (this.actualSeries === 0) {
      this.timeLeft = 30;
    } else if (this.actualSeries === 1) {
      this.timeLeft = 45;
    } else if (this.actualSeries === 2) {
      this.timeLeft = 60;
    } else if (this.actualSeries === 3) {
      this.timeLeft = 75;
    } else if (this.actualSeries >= 4) {
      this.timeLeft = 90;
    }
    this.exerciseAttributes.duration = this.timeLeft;
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
        titleA = 'Clasificación y memorización de imágenes';
        descriptionA = 'En este ejercicio vamos a trabajar tu capacidad para memorizar imágenes. Para ello te ' +
          'mostraré un grupo de imágenes durante un tiempo determinado para que las memorices y luego deberás seleccionar ' +
          'aquellas que has aprendido. Pulsa Continuar.';
        break;
      case ExercisePhase.DEMO1:
        showA = true;
        titleA = 'Clasificación y memorización de imágenes';
        descriptionA = 'Antes de comenzar el ejercicio vamos a hacer una prueba de clasificación de imágenes. Te ' +
          'presentaré distintos dibujos y tendrás que colocarlos en las categorías a las que pertenecen que en este ' +
          'caso serán: herramientas, comidas, transportes y deportes. Pulsa Continuar cuando estés preparado.';
        break;
      case ExercisePhase.DEMO2:
        showA = true;
        titleA = 'Clasificación y memorización de imágenes';
        descriptionA = 'Para colocar cada dibujo en su categoría correspondiente, pulsa sobre el dibujo y luego sobre ' +
          'algún hueco en blanco de esa categoría. Si te equivocas, podrás pulsar de nuevo sobre el dibujo, y luego sobre ' +
          'los huecos blancos de la lista donde se encontraba al principio. Pulsa Continuar.';
        break;
      case ExercisePhase.DEMO_EXERCISE:
        showA = true;
        titleA = 'Clasificación y memorización de imágenes';
        descriptionA = 'Selecciona un objeto y luego pulsa sobre un hueco en la categoría correspondiente. Si deseas terminar ' +
          'la prueba pulsa en el siguiente botón: ';
        break;
      case ExercisePhase.DEMO_END:
        showA = true;
        titleA = 'Clasificación y memorización de imágenes';
        descriptionA = '¡Enhorabuena! Ya has terminado la prueba. Cuando estés listo para comenzar el ejercicio pulsa ' +
          'Comenzar ejercicio.';
        break;
      case ExercisePhase.EXERCISE_INTRO:
        showA = true;
        titleA = 'Clasificación y memorización de imágenes';
        descriptionA = 'Ahora tendrás que memorizar las imágenes que te mostraremos. Tras un determinado tiempo deberás ' +
          'seleccionar las que recuerdes de entre un conjunto de imágenes.';
        break;
      case ExercisePhase.COUNTDOWN:
        showA = true;
        titleA = 'Vamos a comenzar el ejercicio en:';
        descriptionA = '';
        break;
      case ExercisePhase.MEMORIZE:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.ANSWER:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.SCORE:
        showA = true;
        titleA = 'Clasificación y memorización de imágenes';
        descriptionA = 'Fallos: ' + this.classifyObjectsService.numberOfCorrectAnswers(this.actualSeries).errors + ', aciertos: ' +
          this.classifyObjectsService.numberOfCorrectAnswers(this.actualSeries).matches + ', has olvidado: ' +
          (this.classifyObjectsService.numberOfCorrectOptions(this.actualSeries) -
            this.classifyObjectsService.numberOfCorrectAnswers(this.actualSeries).matches) +
          '. Cuando estés listo pulsa en Continuar.';
        break;
      case ExercisePhase.NEXT:
        showA = true;
        titleA = 'Clasificación y memorización de imágenes';
        descriptionA = 'Se te va a mostrar otro conjunto de imágenes para que las memorices.';
        break;
      case ExercisePhase.END:
        showA = true;
        titleA = '¡Enhorabuena! ¡Lo has hecho muy bien!';
        descriptionA = 'Has obtenido una medalla de: ' + this.medal;
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }

}

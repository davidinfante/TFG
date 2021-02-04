import { Component, OnInit } from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {ExerciseAttributes} from '../../../classes/exercise-attributes';
import {InstrumentalQuestionnaireService} from '../../../services/instrumental-questionnaire.service';
import {InstrumentalQuestionnaireAnswers} from '../../../classes/exercises/instrumental-questionnaire-answers';

/**
 * Phases of the exercise
 */
export enum ExercisePhase {
  INTRO,
  QUESTION1,
  QUESTION2,
  QUESTION3,
  QUESTION4,
  QUESTION5,
  QUESTION6,
  QUESTION7,
  QUESTION8,
}

@Component({
  selector: 'app-instrumental-questionnaire-exercise',
  templateUrl: './instrumental-questionnaire-exercise.component.html',
  styleUrls: ['./instrumental-questionnaire-exercise.component.scss'],
})
export class InstrumentalQuestionnaireExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  private userId: number;
  private exerciseAttributes: ExerciseAttributes;
  /**
   * Instrumental Questionnaire Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  /**
   * Questionnaire answers
   */
  private instrumentalQuestionnaireAnswers: InstrumentalQuestionnaireAnswers;

  constructor(
    private instrumentalQuestionnaireService: InstrumentalQuestionnaireService
  ) {
    exerciseManager.exerciseInfo.subscribe( data => {
      this.userId = data.userId;
      this.exerciseAttributes = data.attributes;
    });
  }

  ngOnInit() {
    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();

    this.instrumentalQuestionnaireAnswers = new InstrumentalQuestionnaireAnswers();
  }

  /**
   * Ends the exercise notifying the session
   */
  private endExercise(): void {
    this.instrumentalQuestionnaireService.addResult(this.userId, this.instrumentalQuestionnaireAnswers).subscribe( res => {
      exerciseManager.notifyEnd({
        id: this.exerciseAttributes.id,
        success: true
      });
    });
  }

  /**
   * Changes the phase to the next one
   */
  private nextPhase(): void {
    switch (this.exercisePhase) {
      case ExercisePhase.INTRO:
        this.exercisePhase = ExercisePhase.QUESTION1;
        this.changeAssistantText();
        break;
      case ExercisePhase.QUESTION1:
        this.exercisePhase = ExercisePhase.QUESTION2;
        break;
      case ExercisePhase.QUESTION2:
        this.exercisePhase = ExercisePhase.QUESTION3;
        break;
      case ExercisePhase.QUESTION3:
        this.exercisePhase = ExercisePhase.QUESTION4;
        break;
      case ExercisePhase.QUESTION4:
        this.exercisePhase = ExercisePhase.QUESTION5;
        break;
      case ExercisePhase.QUESTION5:
        this.exercisePhase = ExercisePhase.QUESTION6;
        break;
      case ExercisePhase.QUESTION6:
        this.exercisePhase = ExercisePhase.QUESTION7;
        break;
      case ExercisePhase.QUESTION7:
        this.exercisePhase = ExercisePhase.QUESTION8;
        break;
      case ExercisePhase.QUESTION8:
        this.endExercise();
        break;
    }
  }

  /**
   * Changes the question to the previous one
   */
  private previousQuestion(): void {
    switch (this.exercisePhase) {
      case ExercisePhase.QUESTION2:
        this.exercisePhase = ExercisePhase.QUESTION1;
        break;
      case ExercisePhase.QUESTION3:
        this.exercisePhase = ExercisePhase.QUESTION2;
        break;
      case ExercisePhase.QUESTION4:
        this.exercisePhase = ExercisePhase.QUESTION3;
        break;
      case ExercisePhase.QUESTION5:
        this.exercisePhase = ExercisePhase.QUESTION4;
        break;
      case ExercisePhase.QUESTION6:
        this.exercisePhase = ExercisePhase.QUESTION5;
        break;
      case ExercisePhase.QUESTION7:
        this.exercisePhase = ExercisePhase.QUESTION6;
        break;
      case ExercisePhase.QUESTION8:
        this.exercisePhase = ExercisePhase.QUESTION7;
        break;
    }
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
        titleA = '¡Enhorabuena!';
        descriptionA = 'Has completado los ejercicios de la primera sesión. Ahora te haré unas cuantas preguntas más ' +
          'antes de terminar por hoy.';
        break;
      case ExercisePhase.QUESTION1:
        showA = true;
        titleA = '¡Enhorabuena!';
        descriptionA = 'Has completado los ejercicios. Ahora deberás responder unas cuantas preguntas más antes de terminar ' +
          'la primera sesión. Para ello, elige la respuesta que mejor te describa actualmente.';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }

}

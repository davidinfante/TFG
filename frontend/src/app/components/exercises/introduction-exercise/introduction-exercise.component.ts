import {Component, OnInit} from '@angular/core';
import {exerciseManager} from '../../../classes/exercise-manager';
import {ExerciseAttributes} from '../../../classes/exercise-attributes';
import {QuestionnaireAnswers} from '../../../classes/exercises/questionnaire-answers';
import {QuestionnaireService} from '../../../services/questionnaire.service';

/**
 * Phases of the exercise
 */
export enum ExercisePhase {
  INTRO1,
  INTRO2,
  INTRO3,
  INTRO4,
  INTRO5,
  QUESTION1,
  QUESTION2,
  QUESTION3,
  QUESTION4,
  QUESTION5,
  QUESTION6,
  QUESTION7,
  QUESTION8,
  QUESTION9,
  QUESTION10,
  QUESTION11,
  QUESTION12,
  QUESTION13,
  QUESTION14,
  QUESTION15,
  QUESTION16,
  END
}

@Component({
  selector: 'app-introduction-exercise',
  templateUrl: './introduction-exercise.component.html',
  styleUrls: ['./introduction-exercise.component.scss'],
})
export class IntroductionExerciseComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  private userId: number;
  private exerciseAttributes: ExerciseAttributes;
  /**
   * Introduction Exercise's own attributes
   */
  private exercisePhase: ExercisePhase;
  private consent: boolean;
  /**
   * Questionnaire answers
   */
  private questionnaireAnswers: QuestionnaireAnswers;

  constructor(
    private questionnaireService: QuestionnaireService
  ) {
    exerciseManager.exerciseInfo.subscribe( data => {
      this.userId = data.userId;
      this.exerciseAttributes = data.attributes;
    });
  }

  ngOnInit() {
    this.exercisePhase = ExercisePhase.INTRO1;
    this.changeAssistantText();

    this.consent = false;
    this.questionnaireAnswers = new QuestionnaireAnswers();
  }

  /**
   * Ends the exercise notifying the session
   */
  private endExercise(): void {
    this.questionnaireService.addResult(this.userId, this.questionnaireAnswers).subscribe( res => {
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
      case ExercisePhase.INTRO1:
        this.exercisePhase = ExercisePhase.INTRO2;
        break;
      case ExercisePhase.INTRO2:
        this.exercisePhase = ExercisePhase.INTRO3;
        break;
      case ExercisePhase.INTRO3:
        this.exercisePhase = ExercisePhase.INTRO4;
        this.changeAssistantText();
        break;
      case ExercisePhase.INTRO4:
        this.exercisePhase = ExercisePhase.INTRO5;
        this.changeAssistantText();
        break;
      case ExercisePhase.INTRO5:
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
        this.exercisePhase = ExercisePhase.QUESTION9;
        break;
      case ExercisePhase.QUESTION9:
        this.exercisePhase = ExercisePhase.QUESTION10;
        break;
      case ExercisePhase.QUESTION10:
        this.exercisePhase = ExercisePhase.QUESTION11;
        break;
      case ExercisePhase.QUESTION11:
        this.exercisePhase = ExercisePhase.QUESTION12;
        break;
      case ExercisePhase.QUESTION12:
        this.exercisePhase = ExercisePhase.QUESTION13;
        break;
      case ExercisePhase.QUESTION13:
        this.exercisePhase = ExercisePhase.QUESTION14;
        break;
      case ExercisePhase.QUESTION14:
        this.exercisePhase = ExercisePhase.QUESTION15;
        break;
      case ExercisePhase.QUESTION15:
        this.exercisePhase = ExercisePhase.QUESTION16;
        break;
      case ExercisePhase.QUESTION16:
        this.exercisePhase = ExercisePhase.END;
        this.changeAssistantText();
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
      case ExercisePhase.QUESTION9:
        this.exercisePhase = ExercisePhase.QUESTION8;
        break;
      case ExercisePhase.QUESTION10:
        this.exercisePhase = ExercisePhase.QUESTION9;
        break;
      case ExercisePhase.QUESTION11:
        this.exercisePhase = ExercisePhase.QUESTION10;
        break;
      case ExercisePhase.QUESTION12:
        this.exercisePhase = ExercisePhase.QUESTION11;
        break;
      case ExercisePhase.QUESTION13:
        this.exercisePhase = ExercisePhase.QUESTION12;
        break;
      case ExercisePhase.QUESTION14:
        this.exercisePhase = ExercisePhase.QUESTION13;
        break;
      case ExercisePhase.QUESTION15:
        this.exercisePhase = ExercisePhase.QUESTION14;
        break;
      case ExercisePhase.QUESTION16:
        this.exercisePhase = ExercisePhase.QUESTION15;
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
      case ExercisePhase.INTRO1:
        showA = true;
        titleA = 'Introducción a VIRTRA-EL';
        descriptionA = 'Lee atentamente la siguiente información. Deberás pulsar sobre el botón Leído para poder continuar.';
        break;
      case ExercisePhase.INTRO4:
        showA = true;
        titleA = 'Introducción a VIRTRA-EL';
        descriptionA = 'Por favor, responde la siguiente pregunta antes de continuar.';
        break;
      case ExercisePhase.INTRO5:
        showA = true;
        titleA = 'Introducción a VIRTRA-EL';
        descriptionA = 'Para participar en este proyecto debes leer el documento que se te muestra abajo, es un consentimiento ' +
          'informado.';
        break;
      case ExercisePhase.QUESTION1:
        showA = true;
        titleA = '¡Cuestionario!';
        descriptionA = 'Ahora que sabes cómo vamos a trabajar, nos gustaría que contestases unas preguntas sobre ti.';
        break;
      case ExercisePhase.END:
        showA = true;
        titleA = '¡Gracias por completar el cuestionario!';
        descriptionA = 'Ahora vamos a hacer varios ejercicios que medirán cómo está actualmente tu memoria, atención, planificación ' +
          'y razonamiento. Al final de cada ejercicio conseguirás una medalla de oro, plata o bronce, según cómo lo hayas hecho, ' +
          'así que ¡intenta hacerlo lo mejor posible!';
        break;
    }
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }

}

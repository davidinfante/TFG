import {Component, Input, OnInit} from '@angular/core';
import {WordListService} from '../../../services/exercises/word-list.service';
import {exerciseManager} from '../../../classes/exercise-manager';
import {FunctionsService} from '../../../services/functions.service';
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
  WRITE,
  INTRO2,
  EXERCISE,
  END
}

@Component({
  selector: 'app-word-list-exercise-alternative',
  templateUrl: './word-list-exercise-alternative.component.html',
  styleUrls: ['./word-list-exercise-alternative.component.scss'],
})
export class WordListExerciseAlternativeComponent implements OnInit {
  /**
   * Exercise Attributes
   */
  private userId: number;
  private exerciseAttributes: ExerciseAttributes;
  /**
   * Word List Exercise Alternative's own attributes
   */
  private exercisePhase: ExercisePhase;
  private answeredList: string[];
  @Input() answer: string;
  private alternativeWord: number;
  private score: Score;
  private medal: string;
  /**
   * Timer variables
   */
  private interval;
  private countdownTimeLeft: number;

  constructor(
    private wordListService: WordListService,
    private functionsService: FunctionsService,
    private exerciseResultsService: ExerciseResultsService,
    private medalsService: MedalsService
  ) {
    // Get Exercise Attributes from the session
    exerciseManager.exerciseInfo.subscribe( data => {
      this.userId = data.userId;
      this.exerciseAttributes = data.attributes;
    });
  }

  ngOnInit() {
    this.exercisePhase = ExercisePhase.INTRO;
    this.changeAssistantText();
    this.countdownTimeLeft = 3;
    this.answeredList = [];
    this.alternativeWord = -1;
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
   * Starts the countdown before showing the list
   */
  private startCountdown(): void {
    this.exercisePhase = ExercisePhase.COUNTDOWN;
    this.changeAssistantText();

    this.interval = setInterval(() => {
      if (this.countdownTimeLeft > 0) {
        this.countdownTimeLeft--;
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

  /**
   * For WRITE exercise
   * Checks if the answer is included in the answerList array
   * and if it hasn't been answered yet
   *
   * For EXERCISE exercise
   */
  private checkAnswer(): void {
    // Lower case and remove accents
    const answer = this.functionsService.lowerCaseRemoveAccents(this.answer);
    // If the inputted word is correct and hasn't been answered
    const correct = this.wordListService.getAnswerList().includes(answer) && !this.answeredList.includes(answer);
    if (correct) {
      this.answeredList.push(answer);
      ++this.score.correctCount;
    }
    this.answer = null;
  }

  /**
   * Changes to INTRO2
   */
  private intro2(): void {
    this.exercisePhase = ExercisePhase.INTRO2;
    this.changeAssistantText();
  }

  /**
   * Starts the EXERCISE phase
   */
  private startExercise(): void {
    this.exercisePhase = ExercisePhase.EXERCISE;
    this.changeAssistantText();
    this.nextAlternativeWord();
  }

  /**
   * Gets the next Alternative word from the list
   */
  private nextAlternativeWord(): void {
    // If there are still words in the list
    if (this.alternativeWord < this.wordListService.getAlternativeList().length - 1) {
      ++this.alternativeWord;
    } else { // else end the exercise
      this.exercisePhase = ExercisePhase.END;
      this.createMedal();
      this.changeAssistantText();
    }
  }


  /**
   * Checks if the word exists in the wordList
   * if so - augment score
   */
  private yesButton(): void {
    // If the current alternative word exists in the wordList
    if (this.wordListService.getWordList().includes(this.wordListService.getAlternativeList()[this.alternativeWord])) {
      ++this.score.correctCount;
    } else {
      ++this.score.failCount;
    }
    this.nextAlternativeWord();
  }

  /**
   * Checks if the word exists in the wordList
   * if it doesn't - augment score
   */
  private noButton(): void {
    // If the current alternative word does not exist in the wordList
    if (!this.wordListService.getWordList().includes(this.wordListService.getAlternativeList()[this.alternativeWord])) {
      ++this.score.correctCount;
    } else {
      ++this.score.failCount;
    }
    this.nextAlternativeWord();
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
        titleA = '¡Lista de Palabras (Largo Plazo)!';
        descriptionA = 'Ahora vamos a ver si recuerdas la LISTA AZUL que memorizaste al principio de esta sesión. Se te ' +
          'mostró tres veces. Para ello, en primer lugar, tendrás que escribir las palabras que recuerdes en un recuadro que ' +
          'se te mostrará, sin importar el orden ni las faltas de ortografía. Lo importante es que sepamos cuáles recuerdas. ' +
          'Intenta ser rápido para que no se te olvide ninguna palabra. Cada vez que escribas una palabra debes pulsar el botón ' +
          'Escribir siguiente palabra. Cuando no recuerdes ninguna más, pulsa No recuerdo más palabras. Pulsa Continuar cuando estés ' +
          'preparado.';
        break;
      case ExercisePhase.COUNTDOWN:
        showA = true;
        titleA = 'Vamos a comenzar el ejercicio en:';
        descriptionA = '';
        break;
      case ExercisePhase.WRITE:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.INTRO2:
        showA = true;
        titleA = '¡Lista de Palabras (Largo Plazo)!';
        descriptionA = 'Ahora se te van a mostrar distintas palabras de una en una, algunas de ellas son las que aparecieron ' +
          'en la LISTA AZUL que se te mostró tres veces y que tuviste que memorizar, otras no las has memorizado en ningún momento. ' +
          'Tienes que intentar recordar y pulsar SI, en aquellas palabras que estaban en esa lista y, NO en aquellas que ' +
          'no estaban en la lista.';
        break;
      case ExercisePhase.EXERCISE:
        showA = false;
        titleA = '';
        descriptionA = '';
        break;
      case ExercisePhase.END:
        showA = true;
        titleA = 'Fin del ejercicio';
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

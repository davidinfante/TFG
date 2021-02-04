import { Injectable } from '@angular/core';
import {FunctionsService} from './functions.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InstrumentalQuestionnaireAnswers} from '../classes/exercises/instrumental-questionnaire-answers';

@Injectable({
  providedIn: 'root'
})
export class InstrumentalQuestionnaireService {
  private path = '/api/instrumentalQuestionnaire';

  constructor(
    private functionsService: FunctionsService,
    private httpClient: HttpClient
  ) { }

  /**
   * Adds or updates the results for instrumental questionnaire
   */
  addResult(usrId: number, answers: InstrumentalQuestionnaireAnswers): Observable<any> {
    return this.httpClient.post(this.functionsService.getBackendUrl() + this.path + '/',
      {
        userId: usrId,
        telephone: answers.telephone,
        shopping: answers.shopping,
        cooking: answers.cooking,
        householdChores: answers.householdChores,
        laundry: answers.laundry,
        transport: answers.transport,
        medicine: answers.medicine,
        economicAffairs: answers.economicAffairs
      },
      {responseType: 'text'});
  }
}

import { Injectable } from '@angular/core';
import {FunctionsService} from './functions.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuestionnaireAnswers} from '../classes/exercises/questionnaire-answers';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  private path = '/api/questionnaire';

  constructor(
    private functionsService: FunctionsService,
    private httpClient: HttpClient
  ) { }

  /**
   * Adds or updates the results for questionnaire
   */
    addResult(usrId: number, answers: QuestionnaireAnswers): Observable<any> {
    return this.httpClient.post(this.functionsService.getBackendUrl() + this.path + '/',
      {
        userId: usrId,
        gender: answers.gender,
        placeOfBirth: answers.placeOfBirth,
        yearOfBirth: answers.yearOfBirth,
        monthOfBirth: answers.monthOfBirth,
        dayOfBirth: answers.dayOfBirth,
        maritalStatus: answers.maritalStatus,
        liveWith: answers.liveWith,
        bathing: answers.bathing,
        getDressed: answers.getDressed,
        getReady: answers.getReady,
        eating: answers.eating,
        urinating: answers.urinating,
        defecating: answers.defecating,
        toilet: answers.toilet,
        bedSofa: answers.bedSofa,
        walking: answers.walking,
        stairs: answers.stairs,
        education: answers.education,
        read: answers.read,
        workshop: answers.workshop,
        physicalExercise: answers.physicalExercise,
        computer: answers.computer,
        phoneNumber: answers.phoneNumber
      },
      {responseType: 'text'});
  }
}

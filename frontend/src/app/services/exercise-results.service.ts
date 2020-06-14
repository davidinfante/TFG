import { Injectable } from '@angular/core';
import {FunctionsService} from './functions.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Score} from '../classes/score';

@Injectable({
  providedIn: 'root'
})
export class ExerciseResultsService {
  private path = '/api/exerciseResults';

  constructor(
    private functionsService: FunctionsService,
    private httpClient: HttpClient
  ) { }

  /**
   * Adds or updates a result
   */
  addResult(usrId: number, exerId: number, score: Score): Observable<any> {
    const fullId = usrId.toString() + exerId.toString();
    return this.httpClient.post(this.functionsService.getBackendUrl() + this.path + '/',
      {
        id: fullId,
        userId: usrId,
        exerciseId: exerId,
        correctCount: score.correctCount,
        failCount: score.failCount,
        omissionCount: score.omissionCount,
        finalScore: score.finalScore,
        seconds: score.seconds
      },
      {responseType: 'text'});
  }
}

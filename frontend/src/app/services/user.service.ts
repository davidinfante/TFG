import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FunctionsService} from './functions.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path = '/api/users';

  constructor(
    private functionsService: FunctionsService,
    private httpClient: HttpClient
  ) { }

  /**
   * Returns an user
   */
  getUserSession(id: number): Observable<any> {
    return this.httpClient.get(this.functionsService.getBackendUrl() + this.path + '/' + id);
  }

  /**
   * Updates the user's current exercise
   */
  updateSessionExercise(userId: number, sess: number, currExer: number): Observable<any> {
    return this.httpClient.post(this.functionsService.getBackendUrl() + this.path + '/' + userId,
      {
        id: userId,
        session: sess,
        currentExercise: currExer
      },
      {responseType: 'text'});
  }
}

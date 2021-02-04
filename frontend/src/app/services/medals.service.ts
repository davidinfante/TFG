import { Injectable } from '@angular/core';
import {FunctionsService} from './functions.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedalsService {
  private path = '/api/medals';

  constructor(
    private functionsService: FunctionsService,
    private httpClient: HttpClient
  ) { }

  /**
   * Returns a medal
   */
  getMedal(usrId: number, exerId: number): Observable<any> {
    const fullId = usrId.toString() + exerId.toString();
    return this.httpClient.get(this.functionsService.getBackendUrl() + this.path + '/' + fullId);
  }

  /**
   * Creates a new medal
   */
  createMedal(usrId: number, exerId: number, finalScore: number): Observable<any> {
    const fullId = usrId.toString() + exerId.toString();
    return this.httpClient.post(this.functionsService.getBackendUrl() + this.path + '/' + finalScore,
      {
        id: fullId,
        userId: usrId,
        exerciseId: exerId,
      },
      {responseType: 'text'});
  }
}

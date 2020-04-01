import { Injectable } from '@angular/core';
import {Session} from '../classes/session';
import {DurationKind} from '../enum/duration-kind.enum';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private sessions: Session[] = [
    {
      id: 's1',
      title: 'Sesión 1',
      description: '¡Bienvenido a VIRTRA-EL! Ésta es tu primera sesión, así que te explicaremos en qué consistirá tu plan de trabajo. Por favor, trata de realizar la sesión completa sin interrumpirla.',
      exercises: [
        {
          id: 'e1',
          type: 0,
          duration: 5,
          maxTime: 60,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.TIME,
        },
        {
          id: 'e2',
          type: 0,
          duration: 1,
          maxTime: 60,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.TIME,
        },
        {
          id: 'e1',
          type: 0,
          duration: 3,
          maxTime: 60,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.TIME,
        },
      ],
    },
  ];

  constructor() { }

  /**
   * Return all existent sessions
   */
  getAllSessions() {
    return  [...this.sessions];
  }

  /**
   * Returns a session by it's Id
   */
  getSession(id: string) {
    return {
      ...this.sessions.find(session => {
        return session.id === id;
      })
    };
  }

  /**
   * Returns an exercise's attributes
   */
  getExerciseAttributes(sessionId: string, exercisePos: number) {
    return {
      ...this.getSession(sessionId).exercises[exercisePos]
    };
  }

  /**
   * Return the number of exercises in a session
   */
  getNumberOfExercises(sessionId: string) {
    return this.getSession(sessionId).exercises.length;
  }
}

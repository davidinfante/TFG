import { Injectable } from '@angular/core';
import {Session} from '../classes/session';
import {DurationKind} from '../enum/duration-kind.enum';

@Injectable({
  providedIn: 'root'
})
/**
 * Sessions service
 */
export class SessionsService {
  private sessions: Session[] = [
    {
      id: 's1',
      title: 'Sesión 1',
      description: '¡Bienvenido a VIRTRA-EL! Ésta es tu primera sesión, así que te explicaremos en qué consistirá tu plan de trabajo. ' +
        'Por favor, trata de realizar la sesión completa sin interrumpirla.',
      exercises: [
        {
          id: 'e11',
          type: 0,
          duration: -1,
          maxTime: -1,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.NOTIME,
        },
        {
          id: 'e10',
          type: 0,
          duration: -1,
          maxTime: -1,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.NOTIME,
        },
        {
          id: 'e9',
          type: 0,
          duration: -1,
          maxTime: -1,
          dependsOn: -1,
          repetitions: 17,
          durationKind: DurationKind.NOTIME,
        },
        {
          id: 'e8',
          type: 0,
          duration: -1,
          maxTime: -1,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.NOTIME,
        },
        {
          id: 'e2',
          type: 0,
          duration: 60,
          maxTime: 60,
          dependsOn: -1,
          repetitions: 3,
          durationKind: DurationKind.TIME,
        },
        {
          id: 'e7',
          type: 0,
          duration: 20,
          maxTime: 20,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.TIME,
        },
        {
          id: 'e6',
          type: 0,
          duration: -1,
          maxTime: -1,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.NOTIME,
        },
        {
          id: 'e5',
          type: 0,
          duration: -1,
          maxTime: -1,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.NOTIME,
        },
        {
          id: 'e4',
          type: 0,
          duration: -1,
          maxTime: -1,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.NOTIME,
        },
        {
          id: 'e3',
          type: 0,
          duration: -1,
          maxTime: -1,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.NOTIME,
        },
        {
          id: 'e1',
          type: 0,
          duration: -1,
          maxTime: -1,
          dependsOn: -1,
          repetitions: 0,
          durationKind: DurationKind.NOTIME,
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
  length(sessionId: string) {
    return this.getSession(sessionId).exercises.length;
  }
}

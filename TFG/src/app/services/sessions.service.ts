import { Injectable } from '@angular/core';
import {Session} from '../classes/session';

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
          id: 'e12',
          duration: -1,
          repetitions: 0,
        },
        {
          id: 'e11',
          duration: -1,
          repetitions: 0,
        },
        {
          id: 'e10',
          duration: -1,
          repetitions: 0,
        },
        {
          id: 'e9',
          duration: -1,
          repetitions: 17,
        },
        {
          id: 'e8',
          duration: -1,
          repetitions: 0,
        },
        {
          id: 'e2',
          duration: 60,
          repetitions: 3,
        },
        {
          id: 'e7',
          duration: 20,
          repetitions: 0,
        },
        {
          id: 'e6',
          duration: -1,
          repetitions: 0,
        },
        {
          id: 'e5',
          duration: -1,
          repetitions: 0,
        },
        {
          id: 'e4',
          duration: -1,
          repetitions: 0,
        },
        {
          id: 'e3',
          duration: -1,
          repetitions: 0,
        },
        {
          id: 'e1',
          duration: -1,
          repetitions: 0,
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

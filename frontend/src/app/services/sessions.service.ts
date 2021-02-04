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
      id: 1,
      title: 'Sesión 1',
      description: '¡Bienvenido a VIRTRA-EL! Ésta es tu primera sesión, así que te explicaremos en qué consistirá tu plan de trabajo. ' +
        'Por favor, trata de realizar la sesión completa sin interrumpirla.',
      exercises: [
        {
          id: 32,
          duration: -1,
          repetitions: 17,
        },
        {
          id: 30,
          duration: -1,
          repetitions: 0,
        },
        {
          id: 12,
          duration: -1,
          repetitions: 0,
        },
        {
          id: 11,
          duration: -1,
          repetitions: 0,
        },
        {
          id: 25,
          duration: -1,
          repetitions: 0,
        },
        {
          id: 33,
          duration: -1,
          repetitions: 0,
        },
      ],
    },
    {
      id: 2,
      title: 'Sesión 2',
      description: 'Segunda sesión',
      exercises: [
        {
          id: 8,
          duration: 60,
          repetitions: 3,
        },
        {
          id: 7,
          duration: -1,
          repetitions: 0,
        },
        {
          id: 1,
          duration: -1,
          repetitions: 0,
        },
        {
          id: 6,
          duration: 20,
          repetitions: 0,
        },
        {
          id: 19,
          duration: -1,
          repetitions: 0,
        },
      ],
    },
    {
      id: 3,
      title: 'Sesión 3',
      description: 'Tercera sesión',
      exercises: [
        {
          id: 3,
          duration: -1,
          repetitions: 0,
        },
      ],
    }
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
  getSession(id: number) {
    return {
      ...this.sessions.find(session => {
        return session.id === id;
      })
    };
  }

  /**
   * Returns an exercise's attributes
   */
  getExerciseAttributes(sessionId: number, exercisePos: number) {
    return {
      ...this.getSession(sessionId).exercises[exercisePos]
    };
  }

  /**
   * Return the number of exercises in a session
   */
  length(sessionId: number) {
    return this.getSession(sessionId).exercises.length;
  }
}

import {ExerciseAttributes} from './exercise-attributes';

/**
 * Basic information about a session
 */
export class Session {
  id: string;
  title: string;
  description: string;
  exercises: ExerciseAttributes[];

  constructor() {
    this.id = null;
    this.title = null;
    this.description = null;
    this.exercises = null;
  }
}

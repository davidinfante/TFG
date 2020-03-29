import {SessionExercise} from "./session-exercise";

/**
 * Basic information about a session
 */
export class Session {
  id: string;
  title: string;
  description: string;
  exercises: SessionExercise[];

  constructor() {
    this.id = null;
    this.title = null;
    this.description = null;
    this.exercises = null;
  }
}

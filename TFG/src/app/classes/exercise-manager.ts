import {EventEmitter} from '@angular/core';

class ExerciseManager {
  /**
   * Event emitted when an exercise is finished
   */
  exerciseEnded = new EventEmitter<any>();
  /**
   * Event emitted when an exercise is finished
   */
  exerciseInfo = new EventEmitter<any>();

  constructor() { }

  /**
   * Emit the finalization of an exercise
   */
  notifyEnd(notification: any) {
    this.exerciseEnded.emit(notification);
  }

  /**
   * Emit the finalization of an exercise
   */
  notifyExerciseInfo(notification: any) {
    this.exerciseInfo.emit(notification);
  }
}

export const exerciseManager = new ExerciseManager();

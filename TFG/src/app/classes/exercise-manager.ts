import {EventEmitter} from '@angular/core';
import {DurationKind} from '../enum/duration-kind.enum';

class ExerciseManager {
  /**
   * Event emitted when the assistant text must change
   */
  assistantChange = new EventEmitter<{}>();
  /**
   * Event emitted when an exercise is finished
   */
  exerciseEnded = new EventEmitter<{}>();
  /**
   * Event emitted when an exercise is finished
   */
  exerciseInfo = new EventEmitter<any>();

  constructor() { }

  /**
   * Emit that the assistant text must change
   */
  notifyAssistant(notification: {show: boolean, title: string, description: string}): void {
    this.assistantChange.emit(notification);
  }

  /**
   * Emit the finalization of an exercise
   */
  notifyEnd(notification: {id: string, success: boolean}): void {
    this.exerciseEnded.emit(notification);
  }

  /**
   * Emit the finalization of an exercise
   */
  notifyExerciseInfo(notification: {id: string,
                                    type: number,
                                    duration: number,
                                    maxTime: number,
                                    dependsOn: number,
                                    repetitions: number,
                                    durationKind: DurationKind}): void {
    this.exerciseInfo.emit(notification);
  }
}

export const exerciseManager = new ExerciseManager();

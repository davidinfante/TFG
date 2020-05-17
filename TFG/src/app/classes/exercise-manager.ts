import {EventEmitter} from '@angular/core';

/**
 * Manages the information passed by exercises to sessions
 * and assistants and vice versa
 */
class ExerciseManager {
  /**
   * Emits and event when the assistant text changes
   */
  assistantChange = new EventEmitter<{}>();
  /**
   * Emits and event when an exercise is finished
   */
  exerciseEnded = new EventEmitter<{}>();
  /**
   * Emits and event when the exercise info is passed
   * to the exercise by the session
   */
  exerciseInfo = new EventEmitter<any>();

  constructor() { }

  /**
   * Notify the assistant that the assistant text has changed
   */
  notifyAssistant(notification: {show: boolean, title: string, description: string}): void {
    this.assistantChange.emit(notification);
  }

  /**
   * Notify the session with the finalization of an exercise
   */
  notifyEnd(notification: {id: string, score: number, success: boolean}): void {
    this.exerciseEnded.emit(notification);
  }

  /**
   * Emit the exercise it's parameter values
   */
  notifyExerciseInfo(notification: {id: string, duration: number, repetitions: number}): void {
    this.exerciseInfo.emit(notification);
  }
}

export const exerciseManager = new ExerciseManager();

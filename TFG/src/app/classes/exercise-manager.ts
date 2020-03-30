import {EventEmitter} from '@angular/core';

class ExerciseManager {
  notifyEnd = new EventEmitter<any>();

  constructor() { }

  notify(notification: any) {
    this.notifyEnd.emit(notification);
  }
}

export const exerciseManager = new ExerciseManager();

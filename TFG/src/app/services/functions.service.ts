import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Functions that can be used everywhere
 */
export class FunctionsService {

  constructor() { }

  /**
   * Detects if the device is a mobile device
   */
  isMobile() {
    if (window.screen.width <= 1000) {
      return true;
    } else {
      return false;
    }
  }
}

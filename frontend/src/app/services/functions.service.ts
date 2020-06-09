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

  /**
   * Lower cases and remove accents from a string
   */
  lowerCaseRemoveAccents(str) {
    str = str.toLowerCase();

    const accents    = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    const accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
    str = str.split('');
    const strLen = str.length;
    let i, x;

    for (i = 0; i < strLen; i++) {
      x = accents.indexOf(str[i]);
      if (x !== -1) {
        str[i] = accentsOut[x];
      }
    }

    return str.join('');
  }
}

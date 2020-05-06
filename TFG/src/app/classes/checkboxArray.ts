/**
 * Checkbox values
 */
export class Checkbox {
  value: boolean;
  isChecked: boolean;
  img?: string;

  constructor() {
    this.value = false;
    this.isChecked = false;
    this.img = null;
  }
}

/**
 * Checkbox array
 */
export class CheckboxArray {
  id: number;
  positions: Checkbox[];
  correctPositions?: number[];

  constructor() {
    this.id = null;
    this.positions = null;
    this.correctPositions = null;
  }

  /**
   * Checks if each of the array's value and isChecked match
   */
  allValueAndIsCheckedMatch(): boolean {
    for (const pos of this.positions) {
      if (pos.value !== pos.isChecked) {
        return false;
      }
    }
    return true;
  }

  /**
   * Counts the number of matches (value === true && isChecked)
   * and also the errors (value === false && isChecked)
   */
  numberOfMatches(): {matches: number, errors: number} {
    let matches = 0;
    let errors = 0;
    for (const pos of this.positions) {
      if (pos.value && pos.isChecked) {
        ++matches;
      } else if (!pos.value && pos.isChecked) {
        ++errors;
      }
    }
    return {matches, errors};
  }

  /**
   * Resets isChecked value to false
   */
  resetIsChecked(): void {
    for (const pos of this.positions) {
      pos.isChecked = false;
    }
  }

}

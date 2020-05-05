/**
 * Position values
 */
export class Position {
  value: boolean;
  isChecked: boolean;

  constructor() {
    this.value = false;
    this.isChecked = false;
  }
}

/**
 * Positions array
 */
export class Positions {
  id: number;
  positions: Position[];
  correctPositions: number[];

  constructor() {
    this.id = null;
    this.positions = null;
    this.correctPositions = null;
  }

  /**
   * Checks if each of the array's value and isChecked match
   */
  valueAndIsCheckedMatch(): boolean {
    for (const pos of this.positions) {
      if (pos.value !== pos.isChecked) {
        return false;
      }
    }
    return true;
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

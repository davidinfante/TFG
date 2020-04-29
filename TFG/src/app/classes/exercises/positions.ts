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
 * Positions matrix
 */
export class Positions {
  id: number;
  positions: Position[][];
  correctPositions: number[];

  constructor() {
    this.id = null;
    this.positions = null;
    this.correctPositions = null;
  }

  /**
   * Checks if each of the matrix's value and isChecked match
   */
  valueAndIsCheckedMatch(): boolean {
    for (let i = 0; i < this.positions.length; ++i) {
      for (let j = 0; j < this.positions[i].length; ++j) {
        if (this.positions[i][j].value !== this.positions[i][j].isChecked) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Resets isChecked value to false
   */
  resetIsChecked(): void {
    for (let i = 0; i < this.positions.length; ++i) {
      for (let j = 0; j < this.positions[i].length; ++j) {
        this.positions[i][j].isChecked = false;
      }
    }
  }

}

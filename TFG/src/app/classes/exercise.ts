/**
 * Basic information of an exercise
 */
export class Exercise {
  id: string;
  class: any;
  title: string;
  description: string;

  constructor() {
    this.id = null;
    this.class = null;
    this.title = null;
    this.description = null;
  }
}

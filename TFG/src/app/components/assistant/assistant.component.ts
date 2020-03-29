import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.scss'],
})
export class AssistantComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
    this.title = '';
    this.description = '';
  }

  /**
   * Changes the title for the one passed as porameter
   * @param title Text to be setted as title
   */
  setTitle(title: string) {
    this.title = title;
  }

  /**
   * Changes the description for the one passed as porameter
   * @param description Text to be setted as description
   */
  setDescription(description: string) {
    this.description = description;
  }

}

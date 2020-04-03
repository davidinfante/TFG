import {Component, Input, OnInit} from '@angular/core';
import {exerciseManager} from '../../classes/exercise-manager';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.scss'],
})
/**
 * Assistant class where info about an exercise
 * is located and the assistant avatar is displayed
 */
export class AssistantComponent implements OnInit {
  private show: boolean;
  private title: string;
  private description: string;

  constructor() {
    // Change the assistant text when needed
    exerciseManager.assistantChange.subscribe( data => {
      this.show = data.show;
      this.title = data.title;
      this.description = data.description;
    });
  }

  ngOnInit() {
    this.show = true;
    this.title = '';
    this.description = '';
  }

}

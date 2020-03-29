import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionPageRoutingModule } from './session-routing.module';

import { SessionPage } from './session.page';
import {ExerciseslistPageModule} from "../exerciseslist/exerciseslist.module";
import {WordListExerciseComponent} from "../../components/word-list-exercise/word-list-exercise.component";
import {AdDirective} from "../../directives/ad-directive.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionPageRoutingModule,
    ExerciseslistPageModule
  ],
  declarations: [
    SessionPage,
    AdDirective,
    WordListExerciseComponent
  ],
  entryComponents: [
    WordListExerciseComponent
  ]
})
export class SessionPageModule {}

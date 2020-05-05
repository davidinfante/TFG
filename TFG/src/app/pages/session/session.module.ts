import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionPageRoutingModule } from './session-routing.module';

import { SessionPage } from './session.page';
import {WordListExerciseComponent} from '../../components/exercises/word-list-exercise/word-list-exercise.component';
import {AdDirective} from '../../directives/ad-directive.directive';
import {UserheadermenuComponent} from '../../components/userheadermenu/userheadermenu.component';
import {AssistantComponent} from '../../components/assistant/assistant.component';
import {LogicalSeriesExerciseComponent} from '../../components/exercises/logical-series-exercise/logical-series-exercise.component';
import {SemanticSeriesExerciseComponent} from '../../components/exercises/semantic-series-exercise/semantic-series-exercise.component';
import {PositionsExerciseComponent} from '../../components/exercises/positions-exercise/positions-exercise.component';
import {DirectNumbersExerciseComponent} from '../../components/exercises/direct-numbers-exercise/direct-numbers-exercise.component';
import {NumbersAndVowelsExerciseComponent} from '../../components/exercises/numbers-and-vowels-exercise/numbers-and-vowels-exercise.component';
import {PyramidsExerciseComponent} from '../../components/exercises/pyramids-exercise/pyramids-exercise.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionPageRoutingModule,
  ],
  declarations: [
    SessionPage,
    UserheadermenuComponent,
    AssistantComponent,
    AdDirective,
    WordListExerciseComponent,
    LogicalSeriesExerciseComponent,
    SemanticSeriesExerciseComponent,
    PositionsExerciseComponent,
    DirectNumbersExerciseComponent,
    NumbersAndVowelsExerciseComponent,
    PyramidsExerciseComponent,
  ],
  entryComponents: [
    WordListExerciseComponent,
    LogicalSeriesExerciseComponent,
    SemanticSeriesExerciseComponent,
    PositionsExerciseComponent,
    DirectNumbersExerciseComponent,
    NumbersAndVowelsExerciseComponent,
    PyramidsExerciseComponent,
  ]
})
export class SessionPageModule {}

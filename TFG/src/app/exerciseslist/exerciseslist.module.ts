import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseslistPageRoutingModule } from './exerciseslist-routing.module';

import { ExerciseslistPage } from './exerciseslist.page';
import {UserheadermenuComponent} from "../components/userheadermenu/userheadermenu.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseslistPageRoutingModule
  ],
  declarations: [
    ExerciseslistPage,
    UserheadermenuComponent
  ]
})
export class ExerciseslistPageModule {}

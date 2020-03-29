import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseslistPage } from './exerciseslist.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseslistPageRoutingModule {}

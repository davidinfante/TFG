import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersRoutingModule } from './members-routing.module';

import { MembersPage } from './members.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersRoutingModule,
    HomePageModule
  ],
  declarations: [MembersPage]
})
export class MembersPageModule {}

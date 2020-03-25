import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {HeadermenuComponent} from "../../components/headermenu/headermenu.component";
import {FooterComponent} from "../../components/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    HeadermenuComponent,
    FooterComponent
  ],
  exports: [
    HeadermenuComponent,
    FooterComponent
  ],
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import {HeadermenuComponent} from "../../components/headermenu/headermenu.component";
import {FooterComponent} from "../../components/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
  ],
  declarations: [
    InicioPage,
    HeadermenuComponent,
    FooterComponent
  ],
  exports: [
    HeadermenuComponent,
    FooterComponent
  ],
})
export class InicioPageModule {}

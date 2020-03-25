import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectoPageRoutingModule } from './proyecto-routing.module';

import { ProyectoPage } from './proyecto.page';
import {InicioPageModule} from "../inicio/inicio.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectoPageRoutingModule,
    InicioPageModule
  ],
  declarations: [
    ProyectoPage
  ]
})
export class ProyectoPageModule {}

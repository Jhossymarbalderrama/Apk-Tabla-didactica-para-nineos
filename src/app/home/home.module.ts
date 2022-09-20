import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AppMaterialModule } from '../app-material.module';


import { ColoresPage } from '../colores/colores.page';
import { AnimalesPage } from '../animales/animales.page';
import { NumerosPage } from '../numeros/numeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AppMaterialModule
  ],
  declarations: [HomePage, ColoresPage, AnimalesPage, NumerosPage]
})
export class HomePageModule {}

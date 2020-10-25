import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundaPantallaPageRoutingModule } from './segunda-pantalla-routing.module';

import { SegundaPantallaPage } from './segunda-pantalla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundaPantallaPageRoutingModule
  ],
  declarations: [SegundaPantallaPage]
})
export class SegundaPantallaPageModule {}

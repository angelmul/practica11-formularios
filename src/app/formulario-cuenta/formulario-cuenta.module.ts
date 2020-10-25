import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioCuentaPageRoutingModule } from './formulario-cuenta-routing.module';
import { FormularioCuentaPage } from './formulario-cuenta.page';

@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  FormularioCuentaPageRoutingModule,
  ReactiveFormsModule
  ],
  declarations: [FormularioCuentaPage]
  })
  export class FormularioCuentaPageModule {}
  
  

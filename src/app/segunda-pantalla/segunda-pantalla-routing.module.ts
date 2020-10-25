import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundaPantallaPage } from './segunda-pantalla.page';

const routes: Routes = [
  {
    path: '',
    component: SegundaPantallaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundaPantallaPageRoutingModule {}

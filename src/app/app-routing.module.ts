import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'formulario-cuenta',
    loadChildren: () => import('./formulario-cuenta/formulario-cuenta.module').then( m => m.FormularioCuentaPageModule)
  },
  {
    path: 'segunda-pantalla',
    loadChildren: () => import('./segunda-pantalla/segunda-pantalla.module').then( m => m.SegundaPantallaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

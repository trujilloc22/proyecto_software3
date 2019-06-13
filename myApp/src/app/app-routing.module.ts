import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/**
 * Import la calse del NologinGuard para utilizarla en este archivo(Archivo de rutas)
 */
import { NologinGuard } from "./guards/nologin.guard";



const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate : [NologinGuard] },
  { path: 'registro', loadChildren: './componentes/registro/registro.module#RegistroPageModule', canActivate : [NologinGuard] }
  //{ path: 'solicitar_servicio', loadChildren: './tab3/tab3.module#Tab3PageModule', canActivate : [AutenticacionGuard]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

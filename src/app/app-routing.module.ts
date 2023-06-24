import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEstudianteComponent } from './perfil.estudiante/perfil.estudiante.component';




const routes: Routes = [
  {path :'perfil.estudiante',component:PerfilEstudianteComponent },
  {path:'estudiante',loadChildren:()=>import('./estudiante/estudiante.module').then(val => val.estudianteModule)},
  {path:'**',pathMatch:'full',redirectTo:'perfil-estudiante'}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

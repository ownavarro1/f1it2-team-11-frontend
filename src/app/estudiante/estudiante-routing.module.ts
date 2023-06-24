import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante.component';



const routes: Routes = [
  {path :'',component:EstudianteComponent },
  {path:'**',pathMatch:'full',redirectTo:'perfil-estudiante'}
 
]; 

@NgModule({
  imports: [RouterModule.forChild(routes),RouterModule],
  exports: [RouterModule]
})
export class estudianteRoutingModule { }

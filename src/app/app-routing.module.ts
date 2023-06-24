import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEstudianteComponent } from './perfil.estudiante/perfil.estudiante.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



const routes: Routes = [
  {path :'perfil.estudiante',component:PerfilEstudianteComponent },
  {path: "login", component:LoginComponent},
  { path: "register",component:RegisterComponent},
  {path:"forgot-password", component:ForgotPasswordComponent},
  {path:'estudiante',loadChildren:()=>import('./estudiante/estudiante.module').then(val => val.estudianteModule)},
  {path:'**',pathMatch:'full',redirectTo:'perfil-estudiante'}
 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

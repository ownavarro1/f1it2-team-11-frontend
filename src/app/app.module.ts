import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilEstudianteComponent } from './perfil.estudiante/perfil.estudiante.component';




@NgModule({
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  declarations: [
    AppComponent,
    PerfilEstudianteComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

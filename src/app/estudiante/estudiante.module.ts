import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { EstudianteComponent } from '../estudiante/estudiante.component';
import { estudianteRoutingModule } from './estudiante-routing.module';



@NgModule({
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  declarations: [
    EstudianteComponent,
    
   
   
  ],
  imports: [
    RouterModule,
    estudianteRoutingModule
  ],
 
})
export class estudianteModule { }

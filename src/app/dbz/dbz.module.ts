import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [ // be careful with this, the --ng generate component dont create the export.
    MainPageComponent 
  ],
  imports: [ // the imports are the modules that are used in the component.
    CommonModule,
    FormsModule
  ],
  providers: [ // the providers are the services that are used in the module.
    DbzService   
  ]
})
export class DbzModule { }

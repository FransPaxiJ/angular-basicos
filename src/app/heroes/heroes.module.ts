import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({ // the @ngModule decorator indicates that this is a module
    declarations: [ // the declarations is an array of all the components, directives and pipes that belong to this module.
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // the exports show that this module can be used by other modules. Is PUBLIC
        ListadoComponent 
    ],
    imports: [
        CommonModule // the common module is a module that is always available and contains the most common directives(*ngIf, *ngFor, etc) and pipes.
    ]
})
export class HeroesModule {

}
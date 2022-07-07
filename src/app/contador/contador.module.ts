import { NgModule } from "@angular/core";

import { ContadorComponent } from './contador/contador.component';

@NgModule({ // the @ngModule decorator indicates that this is a module
    declarations: [ // the declarations is an array of all the components, directives and pipes that belong to this module.
        ContadorComponent
    ],
    exports: [ // the exports show that this module can be used by other modules. Is PUBLIC
        ContadorComponent 
    ]
})
export class ContadorModule {

}
import {Component} from '@angular/core'

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroeComponent {
    name: string = 'Ironman';
    age: number = 45;

    get nameCapitalize(): string { //the nameCapitalize is a getter
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.age}`; //the `` is used to concatenate strings
    }

    changeName(): void { //this is method because it doesn't return a value
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 30;
    }

}
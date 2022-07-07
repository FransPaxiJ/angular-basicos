import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{title}}</h1>
        <h3>The base is: <strong>{{base}}</strong></h3>

        <button (click)="acumulate(base)"> + {{base}} </button> 
        <span> {{numero}} </span>
        <button (click)="acumulate(-base)"> - {{base}} </button>

    `,
})
export class ContadorComponent {

  title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;
  
  sum() {
    this.base = this.base + 5;
  }

  rest() {
    this.base = this.base - 5;
  }
  
  
  acumulate(numero: number) {
    this.numero += numero; //the += operator is used to add the value of the parameter to the current value of the property
  }
}
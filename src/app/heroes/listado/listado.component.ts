import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroDelete: string = '';

  deleteHero() {
    //const heroDelete = this.heroes.shift(); //the shift method removes the first element of the array and returns it.
    //console.log(heroDelete);
    this.heroDelete = this.heroes.shift() || '';
  }
}

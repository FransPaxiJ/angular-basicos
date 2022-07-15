import { Component, Input} from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() characters: Character[] = []; // the @Input() decorator makes the property available to the parent component.
  get characters(): Character[] {
    //console.log(this.dbzService.characters)
    return this.dbzService.characters;
  }

  //this is injected from the dependency injection system.
  constructor(private dbzService: DbzService) {}
}

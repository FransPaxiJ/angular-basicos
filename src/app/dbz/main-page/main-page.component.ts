import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  new: Character = {
    name: 'Master Roshi',
    power: 1000
  };

  //this is injected from the dependency injection system.
  constructor() {

  }

}

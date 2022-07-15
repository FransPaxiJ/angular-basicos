import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {
  
  //the @inputs receives the data from the parent father. father(data)=>child(data)
  @Input() new: Character = { // the @Input() decorator makes the property available to the parent component.
    name: '',
    power: 0
  };
  /*--------------------------------------------------------------------------------------------------------------*/
  /*
  // the @outputs send the data to the parent father. child(data)=>father(data)
  @Output() newCharacter:EventEmitter<Character> = new EventEmitter(); // the @Output() decorator sends the new character to the parent(father: main-page) component. 
  */
  /*--------------------------------------------------------------------------------------------------------------*/

  constructor (private dbzService: DbzService){}

  agregate() { // this function is executed when the user clicks the button "Agregate".
    //event.preventDefault(); // prevent the default action of the event. the ngSubmit replaces the default action.
    if ( this.new.name.trim().length === 0 ) { // the trim() method removes all whitespace from the beginning and end of a string
      return; //the return statement stops the execution of the current function.
    }

    //console.log(this.new);
    //this.newCharacter.emit(this.new); // inside the emit method, you can only pass one argument of type Character. newCharacter=this.new
    this.dbzService.agregateCharacter(this.new);

    //this.characters.push(this.new); // push() adds a new element to an array.
    this.new = { name: '', power: 0 }; // reset the new character.
  }
}

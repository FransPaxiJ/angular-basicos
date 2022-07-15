import { Injectable } from "@angular/core";

import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _characters: Character[] = [ // the private us used to make the property private and only accessible from this class.
        { name: 'Goku', power: 15000 },
        { name: 'Vegeta', power: 7500 }
    ];

    get characters(): Character[] { // the get
        return [...this._characters]; // the spread operator(...) is used to create a copy of the array. Don't modify the original array.
        //return this._characters; // this return only objects, not arrays, so it's not a copy and it can be modified.
    }

    constructor(){}

    agregateCharacter(character:Character){
        this._characters.push(character); //to the _characters array we push the new character.
    }

}
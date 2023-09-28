import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

console.log(uuid())

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 1500
    },
    {
      id: uuid(),
      name: 'goten',
      power: 254
    }
  ];

  addCharacter( character:Character):void{
    const newCharacter: Character = {  ...character ,id: uuid() }

    this.characters.push(newCharacter)
    console.log('pruebaaaa push')
  }

  deleteCharacterById(id:string):void{
    console.log('Main Page',id)
    this.characters = this.characters.filter( character => character.id !==  id);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [
  ]


  onDeleteCharacter(idCharacter:string):void {
    this.onDeleteId.emit(idCharacter)

    console.log({idCharacter})
  }

}

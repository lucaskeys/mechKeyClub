import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';
import { Keyboard } from './keyboard.model';


@Pipe({
  name: 'keyboardValues'
})
export class KeyboardValuesPipe implements PipeTransform {

  transform(value, keyboards: Member) {
    

  }
}

import { Keyboard } from './keyboard.model';

export class Member {
  public joinDate: Date = new Date();
  constructor(public name: string, public title: string, public ownedKeyboards: Keyboard[]) {}
}

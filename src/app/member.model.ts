import { Keyboard } from './keyboard.model';

export class Member {
  memberCount: number = 0;
  public joinDate: Date = new Date();
  constructor(public name: string, public title: string, public ownedKeyboards: Keyboard[]) {}
}

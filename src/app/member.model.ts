import { Keyboard } from './keyboard.model';

export class Member {
  memberCount: number = 0;
  constructor(public name: string, public title: string, public ownedKeyboards: Keyboard[], public favoriteKeyboards: Keyboard[], public joinDate: Date) {}
}

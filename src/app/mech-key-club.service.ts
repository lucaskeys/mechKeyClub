import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MechKeyClubService {
  memberList: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.memberList = angularFire.database.list('')

  }

}

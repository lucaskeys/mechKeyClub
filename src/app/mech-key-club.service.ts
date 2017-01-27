import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { Keyboard } from './keyboard.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class MechKeyClubService {
  memberList: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire, private router: Router) {
    this.memberList = angularFire.database.list('members');

  }

  retrieveMembers() {
    return this.memberList;
  }


  getMemberProfile(memberID: string) {
    return this.angularFire.database.object('members/' + memberID);
  }

  addNewMember(newMember: Member) {
    this.memberList.push(newMember);
    this.redirect();
  }

  redirect() {
    this.router.navigate(['/members']);
  }

  updateMember(memberUpdate) {
    var dbMembers = this.getMemberProfile(memberUpdate.$key);
    dbMembers.update({name: memberUpdate.name, title: memberUpdate.title, ownedKeyboards: {brand: memberUpdate.ownedKeyboards.brand, model: memberUpdate.ownedKeyboards.model, switchType: memberUpdate.ownedKeyboards.switchType, size: memberUpdate.ownedKeyboards.size, keycapSet:
    memberUpdate.ownedKeyboards.keycapSet}});
  }

  remove(deleteMember) {
    var memberDB = this.getMemberProfile(deleteMember.$key);
    memberDB.remove();
  }
}

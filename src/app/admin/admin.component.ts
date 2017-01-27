import { Component, OnInit } from '@angular/core';
import { MechKeyClubService } from '../mech-key-club.service';
import { Member } from '../member.model';
import { Keyboard } from '../keyboard.model';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MechKeyClubService]
})
export class AdminComponent implements OnInit {
  keyboards: Keyboard[] = [];

  constructor(private newMember: MechKeyClubService) { }

  ngOnInit() {
  }

  addKeyboard(brand: string, model: string, switchType: string, size: number, keycapSet: string) {
    if(brand) {
      var keyboard: Keyboard = new Keyboard(brand, model, switchType, size, keycapSet);
      this.keyboards.push(keyboard);
    }
  }

  createMember(name: string, title: string, keyboardCollection: Keyboard[]) {
    var member: Member = new Member(name, title, keyboardCollection);
    member.ownedKeyboards = this.keyboards;
    this.newMember.addNewMember(member);
  }
}

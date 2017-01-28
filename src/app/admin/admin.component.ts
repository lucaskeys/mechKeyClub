import { Component, OnInit } from '@angular/core';
import { MechKeyClubService } from '../mech-key-club.service';
import { Member } from '../member.model';
import { Keyboard } from '../keyboard.model';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { CapitalizePipe } from '../capitalize.pipe';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MechKeyClubService],
})
export class AdminComponent implements OnInit {
  keyboards: Keyboard;

  constructor(private newMember: MechKeyClubService) { }

  ngOnInit() {
  }

  addKeyboard(brand: string, model: string, switchType: string, size: number) {
    if(brand) {
      var newKeyboard: Keyboard = new Keyboard(brand, model, switchType, size);
      return this.keyboards = newKeyboard;
    }
  }

  createMember(name: string, title: string, mechKeys: Keyboard) {
    var member: Member = new Member(name, title, mechKeys);
    member.ownedKeyboards = this.keyboards;
    this.newMember.addNewMember(member);
  }
}

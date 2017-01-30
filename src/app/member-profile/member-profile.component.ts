import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Keyboard } from '../keyboard.model';
import { MechKeyClubService } from '../mech-key-club.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { KeyboardValuesPipe } from '../keyboard-values.pipe';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  providers: [MechKeyClubService]
})
export class MemberProfileComponent implements OnInit {
  memberId: string;
  currentMember: Member;
  memberKeyboards: Keyboard[] = [];


  constructor(private af: AngularFire, private route: ActivatedRoute, private location: Location, private memberService: MechKeyClubService) {}
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = (urlParameters['id']);
    });
    this.memberService.getMemberProfile(this.memberId).subscribe(dataFromObserver => {
      this.currentMember = new Member(dataFromObserver.name, dataFromObserver.title, dataFromObserver.ownedKeyboards)
    // this.currentMember = dataFromObserver;
    var userKeyboards = this.currentMember.ownedKeyboards;
      for(var i = 0; i < userKeyboards.length; i++) {
          this.memberKeyboards.push(userKeyboards[i]);
        }
        console.log(this.memberKeyboards);
        console.log(this.currentMember);
        this.currentMember.joinDate.getDay();
    });
  }
}

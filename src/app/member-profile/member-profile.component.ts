import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Keyboard } from '../keyboard.model';
import { MechKeyClubService } from '../mech-key-club.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  providers: [MechKeyClubService]
})
export class MemberProfileComponent implements OnInit {
  memberId: string;
  currentMember;

  constructor(private route: ActivatedRoute, private location: Location, private memberService: MechKeyClubService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = (urlParameters['id']);
    });
    this.currentMember = this.memberService.getMemberProfile(this.memberId);
  }

}

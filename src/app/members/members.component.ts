import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MechKeyClubService } from  '../mech-key-club.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MechKeyClubService]
})
export class MembersComponent implements OnInit {
  memberList: FirebaseListObservable<any[]>;

  constructor(private router: Router, private clubService: MechKeyClubService) { }

  ngOnInit() {
    this.memberList = this.clubService.retrieveMembers();
  }

  memberDetails(member) {
    this.router.navigate(['members', member.$key]);
  }

}

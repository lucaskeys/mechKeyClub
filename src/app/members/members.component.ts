import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberRolesPipe } from '../member-roles.pipe';
import { MechKeyClubService } from  '../mech-key-club.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MechKeyClubService]
})
export class MembersComponent implements OnInit {
  memberList: FirebaseListObservable<any[]>;
  filterByTitle: string = "all"
  currentRoute: string = this.router.url;

  constructor(private router: Router, private clubService: MechKeyClubService) { }

  ngOnInit() {
    this.memberList = this.clubService.retrieveMembers();
  }

  memberDetails(member) {
    this.router.navigate(['members', member.$key]);
  }

  onChange(option) {
    this.filterByTitle = option;
  }
}

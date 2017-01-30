import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Keyboard } from '../keyboard.model';
import { MechKeyClubService } from '../mech-key-club.service';

@Component({
  selector: 'app-edit-members',
  templateUrl: './edit-members.component.html',
  styleUrls: ['./edit-members.component.css'],
  providers: [MechKeyClubService]
})
export class EditMembersComponent implements OnInit {
  @Input() currentMember;
  constructor(private memberService: MechKeyClubService) { }
  ngOnInit() {
  }

  deleteMember(member){
     if(confirm("Are you sure you want to delete this item from the database?")){
       this.memberService.remove(member);
     }
   }
   dbUpdateMember(memberToUpdate) {
     this.memberService.updateMember(memberToUpdate);
   }

}

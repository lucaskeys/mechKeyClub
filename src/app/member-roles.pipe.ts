import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'memberRoles',
  pure: false
})
export class MemberRolesPipe implements PipeTransform {

  transform(input: Member[], memberRoles) {
    var output: Member[] = [];
    if(memberRoles === "president") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].title === "President") {
          output.push(input[i]);
        }
      }
      return output;
      } else if(memberRoles === "vice-president") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].title === "Vice President") {
          output.push(input[i]);
          }
        }
        return output;
        } else if(memberRoles === "secretary") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].title === "Secretary") {
            output.push(input[i]);
          }
        }
      return output;
      } else if(memberRoles === "treasurer") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].title === "Treasurer") {
            output.push(input[i]);
          }
        }
      return output;
    } else if(memberRoles === "attendees") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].title === "Attendees") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
  }

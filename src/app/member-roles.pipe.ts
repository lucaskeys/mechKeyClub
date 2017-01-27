import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberRoles'
})
export class MemberRolesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

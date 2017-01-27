import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { AboutComponent } from './about/about.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { KeyboardMarketComponent } from './keyboard-market/keyboard-market.component';
import { MemberRolesPipe } from './member-roles.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberProfileComponent,
    AboutComponent,
    NewMemberComponent,
    EditMembersComponent,
    KeyboardMarketComponent,
    MemberRolesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

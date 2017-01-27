import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MembersComponent } from './members/members.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { AboutComponent } from './about/about.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { KeyboardMarketComponent } from './keyboard-market/keyboard-market.component';
import { MemberRolesPipe } from './member-roles.pipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AdminComponent } from './admin/admin.component';
import { CapitalizePipe } from './capitalize.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberProfileComponent,
    AboutComponent,
    NewMemberComponent,
    EditMembersComponent,
    KeyboardMarketComponent,
    MemberRolesPipe,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

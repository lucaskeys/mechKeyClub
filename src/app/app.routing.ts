import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KeyboardMarketComponent } from './keyboard-market/keyboard-market.component';
import { MembersComponent } from './members/members.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'keyboard-marketplace',
    component: KeyboardMarketComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'signup',
    component: NewMemberComponent
  },
  {
    path: 'member-profile/:id',
    component: NewMemberComponent
  },
  {
    path: 'edit-members/:id',
    component: MemberProfileComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

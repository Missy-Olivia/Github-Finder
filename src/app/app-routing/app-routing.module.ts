import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing-page/landing/landing.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserComponent } from '../user/user.component'
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'user/repositories?', component: ProfileComponent},
  {path: 'userprofile?', component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
 
  ],
  exports: [RouterModule],
  declarations: []
 })
export class AppRoutingModule { }

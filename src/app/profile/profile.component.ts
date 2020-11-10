import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Users } from '../users';
import { Repository } from '../repository';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Users;
  repos: Repository;
  userRepos: any;
  userName: string;

  constructor(private profileService : ProfileService) {

   }

findProfile() {

   this.profileService.updateProfile(this.userName);

   this.profileService.getUserInfo();
   this.user = this.profileService.user;
  console.log(this.user);

   this.profileService.getRepoInfo(this.userName);
   this.userRepos = this.profileService.newRepo;
 }
  ngOnInit(){

    this.profileService.getRepoInfo(this.userName);
    this.repos = this.profileService.repo;
    this.profileService.getUserInfo();
    this.user = this.profileService.user;
  }

}

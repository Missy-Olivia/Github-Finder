import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';
import{ FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Users;
  repos: Repository;
  userRepos: any;
  userName: string;

  constructor(public profileService: ProfileService) { 

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

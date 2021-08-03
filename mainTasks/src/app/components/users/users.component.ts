import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BasicService} from "../../services/basic.service";
import {IUser} from "../models/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  selected: number = 1;
  selectedUser: IUser;

  constructor(private basicService: BasicService) {
    this.basicService.getAllUsers().subscribe(value => this.users = value)
  }

  ngOnInit(): void {
  }

  findUser(selectEl: HTMLSelectElement) {
    this.selected =selectEl.selectedIndex+1;
    this.selectedUser = this.users[this.selected-1];
    console.log(this.selectedUser);
  }
}

import {Component, OnInit} from '@angular/core';
import {BasicService} from "../../services/basic.service";
import {IUser} from "../models/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  selectedUser: IUser | undefined;

  constructor(private basicService: BasicService) {
    this.basicService.getAllUsers().subscribe(value => this.users = value)
  }

  ngOnInit(): void {
  }

  findUser(selectEl: HTMLSelectElement) {
    this.selectedUser = this.users.find((value)=> value.id == +selectEl.value);
  }
}

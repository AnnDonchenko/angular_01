import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IUser} from "../models/user.interface";
import {BasicService} from "../../services/basic.service";

@Component({
  selector: 'app-users-reactive',
  templateUrl: './users-reactive.component.html',
  styleUrls: ['./users-reactive.component.scss']
})
export class UsersReactiveComponent implements OnInit {
  form: FormGroup;
  users: IUser[];
  selectedUser: IUser | undefined;

  constructor(private basicService:BasicService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nameSelect: new FormControl(1)
    })
    this.basicService.getAllUsers().subscribe(value => this.users = value)
  }

  findUserDetails():void{
    this.selectedUser = this.users.find((value)=>value.id == this.form.value.nameSelect);
  }

}

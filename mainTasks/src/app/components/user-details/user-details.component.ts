import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../models/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  userDetails: IUser;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.userDetails);
  }

}

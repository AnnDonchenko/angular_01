import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../interfaces/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetails : IUser;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.params.subscribe(()=>{
      this.userDetails = this.router.getCurrentNavigation()?.extras.state as IUser;
    })
  }

  ngOnInit(): void {
  }

}

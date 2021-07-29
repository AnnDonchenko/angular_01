import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../models/iuser";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  singleUser: IUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(()=>{
      this.singleUser = this.router.getCurrentNavigation()?.extras.state as IUser;
    })

  }

  ngOnInit(): void {
  }

}

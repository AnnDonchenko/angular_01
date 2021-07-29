import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../models/ipost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  singlePost: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(()=>{
      this.singlePost = this.router.getCurrentNavigation()?.extras.state as IPost;
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../../interfaces/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postDetails: IPost;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.params.subscribe(()=>{
      this.postDetails = this.router.getCurrentNavigation()?.extras.state as IPost;
    })
  }

  ngOnInit(): void {
  }

}

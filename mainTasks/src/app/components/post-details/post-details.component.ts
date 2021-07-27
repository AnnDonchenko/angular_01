import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {IPost} from "../../models/IPost";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postDetail: IPost;

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>
      this.postService.getSinglePost(id).subscribe(value => this.postDetail = value)
    )
  }

}

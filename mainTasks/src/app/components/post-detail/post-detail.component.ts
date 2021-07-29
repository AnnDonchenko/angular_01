import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {IPost} from "../../models/IPost";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: IPost;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getSinglePost(id).subscribe(value => this.post = value)
    })
  }

}

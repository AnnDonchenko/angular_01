import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  @Input()
  userID: number;

  posts: IPost[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserPosts(this.userID).subscribe(value => this.posts = value)
  }

}

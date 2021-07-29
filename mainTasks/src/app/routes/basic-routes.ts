import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UserDetailComponent} from "../components/user-detail/user-detail.component";
import {PostDetailComponent} from "../components/post-detail/post-detail.component";

export let routes:Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailComponent}
    ]
  },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {path: ':id', component: PostDetailComponent}
    ]
  }
]

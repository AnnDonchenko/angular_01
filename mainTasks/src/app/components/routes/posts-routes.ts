import {Routes} from "@angular/router";
import {PostsComponent} from "../posts/posts.component";
import {PostDetailsComponent} from "../post-details/post-details.component";

export let routes: Routes = [
  { path: 'posts',
    component: PostsComponent,
    children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
]

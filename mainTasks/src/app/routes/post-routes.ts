import {Routes} from "@angular/router";
import {PostsComponent} from "../components/posts/posts.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";

export let route:Routes = [{
  path: 'posts',
  component: PostsComponent,
  children: [{
    path: ':id',
    component: PostDetailsComponent
  }]
}]

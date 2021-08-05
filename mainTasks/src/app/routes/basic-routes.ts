import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {UsersReactiveComponent} from "../components/users-reactive/users-reactive.component";

export let routes: Routes = [
  {
    path: 'form1', component: UsersComponent
  },
  {
    path: 'form2', component: UsersReactiveComponent
  }
]

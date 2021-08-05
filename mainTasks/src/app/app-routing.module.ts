import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
      {path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

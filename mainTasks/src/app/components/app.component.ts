// При переході на url 'users' підключити модуль USER. Модуль USER повинен містити наступні компоненти та сервіси :
// UsersComponent, UserComponent, UserDetailsComponent, UserService.
// UserComponent - коротка інформація про юзера.+ кнопку або лінк з уролою '/users/:ID', яка пеерводить на
// сторінку з детальною інформацією про юзера

// При переході на url 'posts' підключити модуль POST. Модуль POST повинен містити наступні компоненти та сервіси :
// PostsComponent, PostComponent,PostDetailsComponent,PostService
// PostComponent - коротка інформація про пост + кнопку або лінк з уролою '/posts/:ID', яка пеерводить на сторінку з
// детальною інформацією про post

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {


}

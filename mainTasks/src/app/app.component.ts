// #Практическая
// есть API для вывода и добавления машин:
// {
//   "id": 40,
//   "model": "seat",
//   "price": 2300,
//   "year": 2018
// }
// GET  http://92.253.237.122/api/v1/cars получить массив всех машин
//   создать форму для добавления машинки
// POST http://92.253.237.122/api/v1/cars записать новую машину в базу данных
// (обратите внимание что метод post, а не get нужно будет указывать в httpClient)
//   Валидация:
//     model максимальная длина 20 символов
// price минимум 0
// year мин 1990 мах 2021

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mainTasks';
}

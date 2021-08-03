import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../components/models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url)
  }

}

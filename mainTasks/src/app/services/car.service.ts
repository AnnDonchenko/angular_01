import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../models/car.interface";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ICar[]>{
    return this.httpClient.get<ICar[]>('http://92.253.237.122/api/v1/cars');
  }

  setCar(car: ICar){
    this.httpClient.post(
      'http://92.253.237.122/api/v1/cars',
      {
        id: car.id,
        model: car.model,
        price: car.price,
        year: car.year
      }
    )
  }
}

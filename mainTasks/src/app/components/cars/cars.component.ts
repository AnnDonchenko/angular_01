import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services/car.service";
import {ICar} from "../../models/car.interface";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: ICar[];

  constructor(private carService: CarService) {
    this.carService.getCars().subscribe(value => this.cars = value)
  }

  ngOnInit(): void {
  }

}

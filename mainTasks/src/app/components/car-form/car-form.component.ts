import { Component, OnInit } from '@angular/core';
import {ICar} from "../../models/car.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  car: ICar;

  carId = new FormControl("0");
  carModel = new FormControl("bmw");

  carForm: FormGroup = new FormGroup({
    carId: this.carId,
    carModel: this.carModel
  })


  constructor() { }

  ngOnInit(): void {
  }

  setNewCar() {
    console.log(this.carForm);

    this.car.id = +this.carForm.controls.carId.value;
    this.car.model = this.carForm.controls.carModel.value;
    // console.log(this.car);
  }
}

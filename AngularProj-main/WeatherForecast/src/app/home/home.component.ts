import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherForecastServiceService } from '../weather-forecast-service.service';
import { Forecast } from './forecast';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forecasts: any;
  
  city: string = "";

  baseForm = new FormGroup({
    name: new FormControl(''),
  });



  constructor(private weatherForecastServiceService: WeatherForecastServiceService) {
  }

  ngOnInit(): void {
  }

  getForecast(): void {
    this.forecasts = this.weatherForecastServiceService.getForecast(this.city).subscribe(data => this.forecasts = data);    
  }
}
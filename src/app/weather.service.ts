import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Temperature } from './temperature';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = "http://api.openweathermap.org/data/2.5/weather?id=598316&appid=4d50e5df37805425aaa5a12745eb2d3d";
  constructor(private http: HttpClient) {
  }
  get() : Observable<Temperature>
  {
    return this.http.get<Temperature>(this.url);
  }
}

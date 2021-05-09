import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Temperature } from './temperature';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = "";
  constructor(private http: HttpClient) {
  }
  get() : Observable<Temperature>
  {
    return this.http.get<Temperature>(this.url);
  }
}

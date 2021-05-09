import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  Activities: Array<Activity> = [];
  temperature: any = null;
  degree :number =0;
  now: Date = new Date();
  
  constructor(private weather: WeatherService) { 
    setInterval(() => {
      this.now = new Date();},1);
  }
  ngOnInit(): void {
    this.weather.get().subscribe(x => {
      this.temperature = x;
      console.log(x.weather[0].icon)
      this.degree = Math.floor(x.main.feels_like);
    });
    this.Activities = new Array<Activity>();
    var Activity_A = new Activity('Beautiful Mountain', 'Green Mountain', 'From 09:00 to 19:00', 'Walking'); this.Activities.push(Activity_A);
    var Activity_B = new Activity('Beautiful Sea', 'Beach A', 'From 07:00 to 21:00', 'Swimming'); this.Activities.push(Activity_B);
    var Activity_C = new Activity('Welcome Party', 'Oaks Street No:09', '21:00', 'Dancing'); this.Activities.push(Activity_C);
    var Activity_D = new Activity('Dance Club', 'S. Daukanto Street No:8', '23:00', 'Dancing'); this.Activities.push(Activity_D);
    var Activity_E = new Activity('Historical Museum', 'Oaks Street No:21', '12:00', 'Dancing'); this.Activities.push(Activity_E);
    var Activity_F = new Activity('Historical Museum', 'Oaks Street No:21', '12:00', 'Dancing'); this.Activities.push(Activity_F);
  }
}

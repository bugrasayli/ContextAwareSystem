import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { AgmMap, MouseEvent, MapsAPILoader } from '@agm/core';
import { WeatherService } from '../weather.service';
import { Temperature } from '../temperature';


@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit {

  @ViewChild(AgmMap, { static: true })
  agmMap: any;
  currentLocation: any;
  constructor(private apiloader: MapsAPILoader, private weather: WeatherService) { }
  lat = 1; lng = 1;

  labelHome = { color: 'black', fontFamily: '', fontSize: '12px', fontWeight: 'bold', text: "Home" }
  labelPark = { color: 'white', fontFamily: '', fontSize: '12px', fontWeight: 'normal', text: "Park" }
  labelClub = { color: 'white', fontFamily: '', fontSize: '12px', fontWeight: 'normal', text: "Dance" }
  labelSwimming = { color: 'white', fontFamily: '', fontSize: '12px', fontWeight: 'normal', text: "Swimming" }
  url: string = 'src\assets\home.png';
  url1: string = 'src\assets\dancing.png';
  url2: string = 'src\assets\walking.png';
  url3: string = 'src\assets\swimming.png';
  url4: string = 'src\assets\swimming.png';

  lat1 = 54.8970719; lng1 = 23.9135804;
  lat2 = 54.8991334; lng2 = 23.9405407;
  lat3 = 54.8991334; lng3 = 23.9405407;
  lat4 = 54.9018544; lng4 = 24.0639184;

  ngOnInit() {
    
    this.get()
    this.agmMap.triggerResize(true);
    console.log(this.lat + ' ' + this.lng);
  }

  get() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(position)
          this.apiloader.load().then(() => {
            let geocoder = new google.maps.Geocoder;
            let latlng = { lat: this.lat, lng: this.lng };
            geocoder.geocode({ 'location': latlng }, function (results) {
              if (results[0]) {
              } else {
              }
            });
          });
        }
      })
    }
  }

}

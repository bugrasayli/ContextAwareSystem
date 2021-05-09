import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  Hotels: Array<Hotel> = [];

  constructor() { }

  ngOnInit(): void {
    this.Hotels = new Array<Hotel>();
    var HotelA = new Hotel("Hotel_A", 500, '3 stars,contains swimming pool'); this.Hotels.push(HotelA);
    var HotelB = new Hotel("Hotel_B", 400, '3 stars,contains sport club'); this.Hotels.push(HotelB);
    var HotelC = new Hotel("Hotel_C", 100, '2 stars,only breakfast, close to city center'); this.Hotels.push(HotelC);
    var HotelD = new Hotel("Hotel_D", 120, '2 stars,only breakfast'); this.Hotels.push(HotelD);
    var HotelE = new Hotel("Hotel_E", 150, '2 stars'); this.Hotels.push(HotelE);
    var HotelF = new Hotel("Hotel_F", 180, '1 star'); this.Hotels.push(HotelF);
    var HotelG = new Hotel("Hotel_G", 700, '4 stars and contains swimming pool and sauna'); this.Hotels.push(HotelG);
    var HotelH = new Hotel("Hotel_H", 180, '2 stars, close to the sea'); this.Hotels.push(HotelH);
    var HotelI = new Hotel("Hotel_A", 1200, '5 stars,contains swimming pool, close to city center'); this.Hotels.push(HotelI);
    var HotelJ = new Hotel("Hotel_A", 1100, '4 stars,contains swimming pool, close to city center'); this.Hotels.push(HotelJ);
    this.Hotels = this.Hotels.filter(x => x.price < 500 && x.price > 150);
  }

}

import { Component, OnInit } from '@angular/core';
import { Film } from '../type';

@Component({
  selector: 'app-main-center',
  templateUrl: './main-center.component.html',
  styleUrls: ['./main-center.component.css']
})
export class MainCenterComponent implements OnInit {
  films : Film[] = [
    {
       id: 1,
    
      picture: "https://image.tmdb.org/t/p/w780//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      title: 'Spider-Man: No Way Home',
      //  description: "C'est beau une ville la nuit !"
    }
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}

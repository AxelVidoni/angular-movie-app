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
      adult: false,
      genre_ids: [28,12,878],
       id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview : "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 5944.171,
      release_date: '2021-12-15',
      title: 'Spider-Man: No Way Home',
      video: false,
      vote_average: 8.3,
      vote_count: 8569,
      poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",

      backdrop_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      
      //  description: "C'est beau une ville la nuit !"
    },

  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}

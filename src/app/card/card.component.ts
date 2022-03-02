import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() film!: Film;
  constructor() { }

  ngOnInit(): void {
  }

}

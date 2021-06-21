import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';
import { CAROUSEL_DATA_ITEMS_SISTEMAS } from './icarousel-sistemas.conts';

@Component({
  selector: 'app-carousel-sistemas',
  templateUrl: './carousel-sistemas.component.html',
  styleUrls: ['./carousel-sistemas.component.css']
})
export class CarouselSistemasComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_SISTEMAS;
  constructor() { }

  ngOnInit(): void {
  }

}

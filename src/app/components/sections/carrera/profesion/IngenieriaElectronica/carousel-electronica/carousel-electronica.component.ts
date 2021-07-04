import { CAROUSEL_DATA_ITEMS_ELECTRONICA } from './icarousel-electronica.const';
import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';

@Component({
  selector: 'app-carousel-electronica',
  templateUrl: './carousel-electronica.component.html',
  styleUrls: ['./carousel-electronica.component.css']
})
export class CarouselElectronicaComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_ELECTRONICA;

  constructor() { }

  ngOnInit(): void {
  }

}

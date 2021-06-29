import { CAROUSEL_DATA_ITEMS_MECATRONICA } from './icarousel-mecatronica.const';
import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';

@Component({
  selector: 'app-carousel-mecatronica',
  templateUrl: './carousel-mecatronica.component.html',
  styleUrls: ['./carousel-mecatronica.component.css']
})
export class CarouselMecatronicaComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_MECATRONICA;
  constructor() { }

  ngOnInit(): void {
  }

}

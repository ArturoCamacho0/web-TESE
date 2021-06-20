import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_AERONAUTICA } from './icarousel-aeronautica.const';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';

@Component({
  selector: 'app-carousel-aeronautica',
  templateUrl: './carousel-aeronautica.component.html',
  styleUrls: ['./carousel-aeronautica.component.css']
})
export class CarouselAeronauticaComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_AERONAUTICA;
  constructor() { }

  ngOnInit(): void {
  }

}

import { CAROUSEL_DATA_ITEMS_MECANICA } from './icarousel-mecanica.conts';
import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';


@Component({
  selector: 'app-carousel-mecanica',
  templateUrl: './carousel-mecanica.component.html',
  styleUrls: ['./carousel-mecanica.component.css']
})
export class CarouselMecanicaComponent implements OnInit {

  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_MECANICA;
  constructor() { }

  ngOnInit(): void {
  }

}


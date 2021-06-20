import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';
import { CAROUSEL_DATA_ITEMS_QUIMICA } from './icarousel-Quimica.const';

@Component({
  selector: 'app-carousel-quimica',
  templateUrl: './carousel-quimica.component.html',
  styleUrls: ['./carousel-quimica.component.css']
})
export class CarouselQuimicaComponent implements OnInit {

  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_QUIMICA;
  constructor() { }

  ngOnInit(): void {
  }

}

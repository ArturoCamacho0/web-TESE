import { CAROUSEL_DATA_ITEMS_GESTION } from './icarousel-gestion.const';
import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';

@Component({
  selector: 'app-carousel-gestion',
  templateUrl: './carousel-gestion.component.html',
  styleUrls: ['./carousel-gestion.component.css']
})
export class CarouselGestionComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_GESTION;
  constructor() { }

  ngOnInit(): void {
  }

}

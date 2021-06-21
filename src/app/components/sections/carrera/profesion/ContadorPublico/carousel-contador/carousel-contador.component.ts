import { CAROUSEL_DATA_ITEMS_CONTADOR } from './icarousel-contador.const';
import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';

@Component({
  selector: 'app-carousel-contador',
  templateUrl: './carousel-contador.component.html',
  styleUrls: ['./carousel-contador.component.css']
})
export class CarouselContadorComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_CONTADOR;
  constructor() { }

  ngOnInit(): void {
  }

}

import { CAROUSEL_DATA_ITEMS_INDUSTRIAL } from './icarousel-industrial.const';
import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';
@Component({
  selector: 'app-carousel-industrial',
  templateUrl: './carousel-industrial.component.html',
  styleUrls: ['./carousel-industrial.component.css']
})
export class CarouselIndustrialComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_INDUSTRIAL;
  constructor() { }

  ngOnInit(): void {
  }

}

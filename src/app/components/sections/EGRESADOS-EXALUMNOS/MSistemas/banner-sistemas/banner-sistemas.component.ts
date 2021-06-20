
import { CAROUSEL_DATA_ITEMS_MSISTEMAS } from './bannerMsistemas';
import { ICarouselItemCarreras } from '../../../carrera/carousel-carreras/Icarousel-carreras.item.metadata';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-sistemas',
  templateUrl: './banner-sistemas.component.html',
  styleUrls: ['./banner-sistemas.component.css']
})
export class BannerSistemasComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_MSISTEMAS;

  constructor() { }

  ngOnInit(): void {
  }

}

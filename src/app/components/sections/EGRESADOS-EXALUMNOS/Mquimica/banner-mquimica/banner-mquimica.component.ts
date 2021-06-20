import { ICarouselItemCarreras } from './../../../carrera/carousel-carreras/icarousel-carreras.item.metadata';
import { CAROUSEL_DATA_ITEMS_MQUIMICA } from './bannerMquimica';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-mquimica',
  templateUrl: './banner-mquimica.component.html',
  styleUrls: ['./banner-mquimica.component.css']
})
export class BannerMquimicaComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_MQUIMICA;

  constructor() { }

  ngOnInit(): void {
  }

}

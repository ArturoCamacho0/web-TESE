import { CAROUSEL_DATA_ITEMS_EGRESADOS } from './bannerEgresados';
import { ICarouselItemCarreras } from '../../carrera/carousel-carreras/Icarousel-carreras.item.metadata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-egresados',
  templateUrl: './banner-egresados.component.html'
})
export class BannerEgresadosComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_EGRESADOS;
  constructor() { }

  ngOnInit(): void {
  }

}

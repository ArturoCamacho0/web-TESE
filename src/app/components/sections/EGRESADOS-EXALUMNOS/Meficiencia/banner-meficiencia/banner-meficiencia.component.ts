import { CAROUSEL_DATA_ITEMS_MEFICIENCIA } from './bannerMeficiencia';
import { ICarouselItemCarreras } from '../../../carrera/carousel-carreras/icarousel-carreras.item.metadata'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-meficiencia',
  templateUrl: './banner-meficiencia.component.html',
  styleUrls: ['./banner-meficiencia.component.css']
})
export class BannerMeficienciaComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_MEFICIENCIA;

  constructor() { }

  ngOnInit(): void {
  }

}

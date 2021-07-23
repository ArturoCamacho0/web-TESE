import { CAROUSEL_DATA_ITEMS_MBIOQUIMICA } from './bannerMbioquimica';
import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carrera/carousel-carreras/Icarousel-carreras.item.metadata';

@Component({
  selector: 'app-banner-mbioquimica',
  templateUrl: './banner-mbioquimica.component.html',
  styleUrls: ['./banner-mbioquimica.component.css']
})
export class BannerMbioquimicaComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_MBIOQUIMICA;

  constructor() { }

  ngOnInit(): void {
  }

}

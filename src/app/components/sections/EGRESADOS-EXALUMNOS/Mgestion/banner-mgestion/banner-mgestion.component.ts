import { CAROUSEL_DATA_ITEMS_MGESTION } from './bannerMgestion';
import { ICarouselItemCarreras } from '../../../carrera/carousel-carreras/Icarousel-carreras.item.metadata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-mgestion',
  templateUrl: './banner-mgestion.component.html',
  styleUrls: ['./banner-mgestion.component.css']
})
export class BannerMgestionComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_MGESTION;

  constructor() { }

  ngOnInit(): void {
  }

}

import { CAROUSEL_DATA_ITEMS_MQUIMICA } from './bannerMquimica';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-mquimica',
  templateUrl: './banner-mquimica.component.html',
  styleUrls: ['./banner-mquimica.component.css']
})
export class BannerMquimicaComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MQUIMICA;

  constructor() { }

  ngOnInit(): void {
  }

}

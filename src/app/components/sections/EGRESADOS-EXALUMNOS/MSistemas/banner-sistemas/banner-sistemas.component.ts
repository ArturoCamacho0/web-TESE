import { CAROUSEL_DATA_ITEMS_MSISTEMAS } from './bannerMsistemas';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-sistemas',
  templateUrl: './banner-sistemas.component.html',
  styleUrls: ['./banner-sistemas.component.css']
})
export class BannerSistemasComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MSISTEMAS;

  constructor() { }

  ngOnInit(): void {
  }

}

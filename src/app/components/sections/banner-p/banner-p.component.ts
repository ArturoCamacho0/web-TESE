import { ICarouselItem } from '../carousel/icarousel-item.metadata';
import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './Ibanner_const';

@Component({
  selector: 'app-banner-p',
  templateUrl: './banner-p.component.html'
})
export class BannerPComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor() { }

  ngOnInit(): void {
  }

}

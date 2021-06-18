import { CAROUSEL_DATA_ITEMS_MMECATRONICA } from './bannerMmecatronica';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-mmecatronica',
  templateUrl: './banner-mmecatronica.component.html',
  styleUrls: ['./banner-mmecatronica.component.css']
})
export class BannerMmecatronicaComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MMECATRONICA;

  constructor() { }

  ngOnInit(): void {
  }

}

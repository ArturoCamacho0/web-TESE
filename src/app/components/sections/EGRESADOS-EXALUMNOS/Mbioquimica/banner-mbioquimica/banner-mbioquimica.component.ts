import { CAROUSEL_DATA_ITEMS_MBIOQUIMICA } from './bannerMbioquimica';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-mbioquimica',
  templateUrl: './banner-mbioquimica.component.html',
  styleUrls: ['./banner-mbioquimica.component.css']
})
export class BannerMbioquimicaComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MBIOQUIMICA;

  constructor() { }

  ngOnInit(): void {
  }

}

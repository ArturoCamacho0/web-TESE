import { CAROUSEL_DATA_ITEMS_BIOQUIMICA } from './icarousel-bioquimica.const';
import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';

@Component({
  selector: 'app-carousel-bioquimica',
  templateUrl: './carousel-bioquimica.component.html',
  styleUrls: ['./carousel-bioquimica.component.css']
})
export class CarouselBioquimicaComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_BIOQUIMICA;

  constructor() { }

  ngOnInit(): void {
  }

}

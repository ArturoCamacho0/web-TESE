import { CAROUSEL_DATA_ITEMS_INFORMATICA } from './carousel-informatica.const';
import { Component, OnInit } from '@angular/core';
import { ICarouselItemCarreras } from '../../../carousel-carreras/Icarousel-carreras.item.metadata';


@Component({
  selector: 'app-carousel-informatica',
  templateUrl: './carousel-informatica.component.html',
  styleUrls: ['./carousel-informatica.component.css']
})
export class CarouselInformaticaComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_INFORMATICA;
  constructor() { }

  ngOnInit(): void {
  }

}

import { ICarouselItemCarreras } from './../carousel-carreras/icarousel-carreras.item.metadata';
import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_CARRERA } from './imenu.const';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  public carouselData: ICarouselItemCarreras[]=CAROUSEL_DATA_ITEMS_CARRERA;
   constructor() {

    }

   ngOnInit() {

   }

 }

import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
@Component({
  selector: 'app-informe-actividades',
  templateUrl: './informe-actividades.component.html',
  styleUrls: ['./informe-actividades.component.css']
})
export class InformeActividadesComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;


  constructor() { }

  ngOnInit(): void {
  }
 onClick(){
    let full = document.getElementById('side');
    full.classList.toggle('active');
  }

  open(){
    let r = document.getElementById('right');
    r.classList.toggle('open');

    let l = document.getElementById('left');
    l.classList.toggle('open');
  }
}

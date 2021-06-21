import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_MQUIMICA } from '../banner-mquimica/bannerMquimica';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

@Component({
  selector: 'app-pagina-mquimica',
  templateUrl: './pagina-mquimica.component.html',
  styleUrls: ['./pagina-mquimica.component.css']
})
export class PaginaMquimicaComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MQUIMICA;
   constructor() { }

  ngOnInit(): void {
  }

  //botones de ayuda al menu
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

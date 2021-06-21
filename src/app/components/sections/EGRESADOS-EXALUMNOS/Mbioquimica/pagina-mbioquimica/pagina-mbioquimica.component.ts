import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_MBIOQUIMICA } from '../banner-mbioquimica/bannerMbioquimica';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

@Component({
  selector: 'app-pagina-mbioquimica',
  templateUrl: './pagina-mbioquimica.component.html',
  styleUrls: ['./pagina-mbioquimica.component.css']
})
export class PaginaMbioquimicaComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MBIOQUIMICA;
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

import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_MSISTEMAS } from '../banner-sistemas/bannerMsistemas';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pagina-msistemas',
  templateUrl: './pagina-msistemas.component.html',
  styleUrls: ['./pagina-msistemas.component.css']
})
export class PaginaMsistemasComponent implements OnInit {
  items: Observable<any[]>

  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MSISTEMAS;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('EgresadosYExalumnos').valueChanges();
  }

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

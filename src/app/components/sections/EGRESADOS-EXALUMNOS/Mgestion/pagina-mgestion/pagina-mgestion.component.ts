import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_MGESTION } from '../banner-mgestion/bannerMgestion';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pagina-mgestion',
  templateUrl: './pagina-mgestion.component.html',
  styleUrls: ['./pagina-mgestion.component.css']
})
export class PaginaMgestionComponent implements OnInit {
  items: Observable<any[]>

  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MGESTION;

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

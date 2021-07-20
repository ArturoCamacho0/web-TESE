import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_MBIOQUIMICA } from '../banner-mbioquimica/bannerMbioquimica';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pagina-mbioquimica',
  templateUrl: './pagina-mbioquimica.component.html',
  styleUrls: ['./pagina-mbioquimica.component.css']
})
export class PaginaMbioquimicaComponent implements OnInit {

  items: Observable<any[]>
  materiasB: Observable<any[]>
  materiasO: Observable<any[]>

  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MBIOQUIMICA;
  constructor(firestore: AngularFirestore) {
    
    this.items = firestore.collection('EgresadosYExalumnos').valueChanges();
    this.materiasB = firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/BioquimicaMateriasBasicas').valueChanges();
    this.materiasO = firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/BioquimicaMateriasOptativas').valueChanges();
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

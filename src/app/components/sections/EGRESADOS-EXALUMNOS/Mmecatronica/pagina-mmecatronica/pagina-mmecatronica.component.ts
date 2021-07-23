import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_MMECATRONICA } from '../banner-mmecatronica/bannerMmecatronica';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pagina-mmecatronica',
  templateUrl: './pagina-mmecatronica.component.html',
  styleUrls: ['./pagina-mmecatronica.component.css']
})
export class PaginaMmecatronicaComponent implements OnInit {

  items: Observable<any[]>
  Conceptos: Observable<any[]>
  Objetivos: Observable<any[]>
  Perfiles: Observable<any[]>
  Estructuras: Observable<any[]>
  Areas: Observable<any[]>

  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MMECATRONICA;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('EgresadosYExalumnos').valueChanges();
    this.Conceptos = firestore.collection('/EgresadosYExalumnos/Mmecatronica/ConceptosMmecatronica').valueChanges();
    this.Objetivos = firestore.collection('/EgresadosYExalumnos/Mmecatronica/ObjetivoMmecatronica').valueChanges();
    this.Perfiles = firestore.collection('/EgresadosYExalumnos/Mmecatronica/PerfilMmecatronica').valueChanges();
    this.Estructuras = firestore.collection('/EgresadosYExalumnos/Mmecatronica/EstructuraMmecatronica').valueChanges();
    this.Areas = firestore.collection('/EgresadosYExalumnos/Mmecatronica/AreasMmecatronica').valueChanges();
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

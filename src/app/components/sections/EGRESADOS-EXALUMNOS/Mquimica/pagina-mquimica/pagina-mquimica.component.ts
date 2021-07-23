import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_MQUIMICA } from '../banner-mquimica/bannerMquimica';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pagina-mquimica',
  templateUrl: './pagina-mquimica.component.html',
  styleUrls: ['./pagina-mquimica.component.css']
})

export class PaginaMquimicaComponent implements OnInit {
  items: Observable<any[]>
  Conceptos: Observable<any[]>
  Objetivos: Observable<any[]>
  Perfiles: Observable<any[]>
  Materias: Observable<any[]>
  Areas: Observable<any[]>
  materiasB: Observable<any[]>
  materiasO: Observable<any[]>

  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MQUIMICA;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('EgresadosYExalumnos').valueChanges();
    this.materiasB = firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/QuimicaMateriasBasicas').valueChanges();
    this.materiasO = firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/QuimicaMateriasOptativas').valueChanges();
    this.Conceptos = firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ConceptosMquimica').valueChanges();
    this.Objetivos = firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ObjetivoMquimica').valueChanges();
    this.Perfiles = firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/PerfilMquimica/01/PerfilMquimicaOpc').valueChanges();
    this.Areas = firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/AreaMquimica').valueChanges();
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

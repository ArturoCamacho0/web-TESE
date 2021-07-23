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
  Conceptos: Observable<any[]>
  Objetivos: Observable<any[]>
  Perfiles: Observable<any[]>
  Estructuras: Observable<any[]>
  Duraciones: Observable<any[]>
  Carreras: Observable<any[]>


  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MGESTION;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('EgresadosYExalumnos').valueChanges();
    this.Conceptos = firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/ConceptosGestion').valueChanges();
    this.Objetivos = firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/ObjetivoGestion').valueChanges();
    this.Perfiles = firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/PerfilGestion').valueChanges();
    this.Estructuras = firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/EstructuraGestion').valueChanges();
    this.Duraciones = firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/DuracionGestion').valueChanges();
    this.Carreras = firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/CarrerasGestion').valueChanges();
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

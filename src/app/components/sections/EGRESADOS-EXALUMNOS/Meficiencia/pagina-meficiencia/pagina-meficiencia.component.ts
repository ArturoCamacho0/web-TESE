import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_MEFICIENCIA } from '../banner-meficiencia/bannerMeficiencia';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pagina-meficiencia',
  templateUrl: './pagina-meficiencia.component.html',
  styleUrls: ['./pagina-meficiencia.component.css']
})
export class PaginaMeficienciaComponent implements OnInit {

  items: Observable<any[]>
  materiasB: Observable<any[]>
  materiasO: Observable<any[]>
  Conceptos: Observable<any[]>
  Objetivos: Observable<any[]>
  Perfiles: Observable<any[]>
  Campos: Observable<any[]>


  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MEFICIENCIA;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('EgresadosYExalumnos').valueChanges();
    this.materiasB = firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/EficienciaMateriasBasicas').valueChanges();
    this.materiasO = firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/EficienciaMateriasOptativas').valueChanges();
    this.Conceptos = firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/ConceptosMeficiencia').valueChanges();
    this.Objetivos = firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/ObjetivoMeficiencia').valueChanges();
    this.Perfiles = firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/PerfilMeficiencia').valueChanges();
    this.Campos = firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/CampoMeficiencia').valueChanges();
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

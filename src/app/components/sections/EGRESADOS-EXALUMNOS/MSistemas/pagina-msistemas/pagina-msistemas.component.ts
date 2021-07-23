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
  Conceptos: Observable<any[]>
  Dirigidos: Observable<any[]>
  PerfilesI: Observable<any[]>
  PerfilesE: Observable<any[]>
  Requisitos: Observable<any[]>
  Documentos: Observable<any[]>
  Misiones: Observable<any[]>
  Visiones: Observable<any[]>
  Lineas: Observable<any[]>

  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MSISTEMAS;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('/EgresadosYExalumnos').valueChanges();
    this.Conceptos = firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/ConceptosMsistemas').valueChanges();
    this.Dirigidos = firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/DirigidoMSistemas').valueChanges();
    this.PerfilesI = firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/PerfilIMsistemas').valueChanges();
    this.PerfilesE = firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/PerfilEMsistemas').valueChanges();
    this.Requisitos = firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/RequisitosMsistemas').valueChanges();
    this.Documentos = firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/DocumentosMsistemas').valueChanges();
    this.Misiones = firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/MisionMsistemas').valueChanges();
    this.Visiones = firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/VisionMsistemas').valueChanges();
    this.Lineas = firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/LineasMsistemas').valueChanges();
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

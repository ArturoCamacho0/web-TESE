import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-industrial',
  templateUrl: './cuerpo-industrial.component.html',
  styleUrls: ['./cuerpo-industrial.component.css']
})
export class CuerpoIndustrialComponent implements OnInit {

  CamLab: Observable<any[]>
  Obj: Observable<any[]>
  PerEgre: Observable<any[]>
  Tit: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.CamLab = firestore.collectionGroup('CampoLaboral-Industrial').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Industrial').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Industrial').valueChanges();
    this.Tit = firestore.collectionGroup('TituloBoton-Industrial').valueChanges();
    this.Cit = firestore.collectionGroup('ContenidoBoton-Industrial').valueChanges();
  }

  ngOnInit(): void {
  }

}

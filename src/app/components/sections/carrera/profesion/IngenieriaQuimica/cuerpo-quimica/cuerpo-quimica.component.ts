import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-quimica',
  templateUrl: './cuerpo-quimica.component.html',
  styleUrls: ['./cuerpo-quimica.component.css']
})
export class CuerpoQuimicaComponent implements OnInit {

  CamLab: Observable<any[]>
  Obj: Observable<any[]>
  PerEgre: Observable<any[]>
  Tit: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.CamLab = firestore.collectionGroup('CampoLaboral-Quimica').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Quimica').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Quimica').valueChanges();
    this.Tit = firestore.collectionGroup('TituloBoton-Quimica').valueChanges();
    this.Cit = firestore.collectionGroup('ContenidoBoton-Quimica').valueChanges();
  }

  ngOnInit(): void {
  }
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

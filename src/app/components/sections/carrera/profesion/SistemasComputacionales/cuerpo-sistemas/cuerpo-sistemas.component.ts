import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-sistemas',
  templateUrl: './cuerpo-sistemas.component.html',
  styleUrls: ['./cuerpo-sistemas.component.css']
})
export class CuerpoSistemasComponent implements OnInit {

  CamLab: Observable<any[]>
  Obj: Observable<any[]>
  PerEgre: Observable<any[]>
  Tit: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.CamLab = firestore.collectionGroup('CampoLaboral-Sistemas').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Sistemas').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Sistemas').valueChanges();
    this.Tit = firestore.collectionGroup('TituloBoton-Sistemas').valueChanges();
    this.Cit = firestore.collectionGroup('ContenidoBoton-Sistemas').valueChanges();
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

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-informatica',
  templateUrl: './cuerpo-informatica.component.html',
  styleUrls: ['./cuerpo-informatica.component.css']
})
export class CuerpoInformaticaComponent implements OnInit {

  CamLab: Observable<any[]>
  Obj: Observable<any[]>
  PerEgre: Observable<any[]>
  Tit: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.CamLab = firestore.collectionGroup('CampoLaboral-Informatica').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Informatica').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Informatica').valueChanges();
    this.Tit = firestore.collectionGroup('TituloBoton-Informatica').valueChanges();
    this.Cit = firestore.collectionGroup('ContenidoBoton-Informatica').valueChanges();
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

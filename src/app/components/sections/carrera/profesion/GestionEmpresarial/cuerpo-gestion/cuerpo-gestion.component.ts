import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-gestion',
  templateUrl: './cuerpo-gestion.component.html',
  styleUrls: ['./cuerpo-gestion.component.css']
})
export class CuerpoGestionComponent implements OnInit {

  Obj: Observable<any[]>
  PerEgre: Observable<any[]>
  Tit: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.Obj = firestore.collectionGroup('Objetivo-Gestion').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Gestion').valueChanges();
    this.Tit = firestore.collectionGroup('TituloBoton-Gestion').valueChanges();
    this.Cit = firestore.collectionGroup('ContenidoBoton-Gestion').valueChanges();
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

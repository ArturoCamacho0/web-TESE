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
  ObjG: Observable<any[]>
  PerEgre: Observable<any[]>
  Bot: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.CamLab = firestore.collectionGroup('CampoLaboral-Quimica').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Quimica').valueChanges();
    this.ObjG = firestore.collectionGroup('ObjetivoGeneral-Quimica').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Quimica').valueChanges();
    this.Bot = firestore.collectionGroup('Boton-Quimica').valueChanges();
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

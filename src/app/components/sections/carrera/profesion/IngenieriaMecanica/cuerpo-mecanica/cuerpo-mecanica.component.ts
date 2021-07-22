import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-mecanica',
  templateUrl: './cuerpo-mecanica.component.html',
  styleUrls: ['./cuerpo-mecanica.component.css']
})
export class CuerpoMecanicaComponent implements OnInit {

  CamLab: Observable<any[]>
  Obj: Observable<any[]>
  ObjG: Observable<any[]>
  PerEgre: Observable<any[]>
  Bot: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.CamLab = firestore.collectionGroup('CampoLaboral-Mecanica').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Mecanica').valueChanges();
    this.ObjG = firestore.collectionGroup('ObjetivoGeneral-Mecanica').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Mecanica').valueChanges();
    this.Bot = firestore.collectionGroup('Boton-Mecanica').valueChanges();
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

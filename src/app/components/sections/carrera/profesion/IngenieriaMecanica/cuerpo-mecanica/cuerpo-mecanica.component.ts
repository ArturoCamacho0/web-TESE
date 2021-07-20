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
  PerEgre: Observable<any[]>
  Tit: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.CamLab = firestore.collectionGroup('CampoLaboral-Mecanica').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Mecanica').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Mecanica').valueChanges();
    this.Tit = firestore.collectionGroup('TituloBoton-Mecanica').valueChanges();
    this.Cit = firestore.collectionGroup('ContenidoBoton-Mecanica').valueChanges();
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

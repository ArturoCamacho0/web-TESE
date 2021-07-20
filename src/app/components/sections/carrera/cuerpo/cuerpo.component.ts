import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})

export class CuerpoComponent implements OnInit {
  item: Observable<any[]>
  mision: Observable<any[]>
  vision: Observable<any[]>
  mac: Observable<any[]>
  vac: Observable<any[]>
  Tit: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.item = firestore.collection('prueba').valueChanges();
       this.mision = firestore.collectionGroup('Mision-Carrera').valueChanges();
       this.vision = firestore.collectionGroup('Vision-Carrera').valueChanges();
       this.mac = firestore.collectionGroup('MisionDivAcad-Carrera').valueChanges();
       this.vac = firestore.collectionGroup('VisionDivAcad-Carrera').valueChanges();
       this.Tit = firestore.collectionGroup('TituloBoton-Carrera').valueChanges();
       this.Cit = firestore.collectionGroup('DireccionBoton-Carrera').valueChanges();
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

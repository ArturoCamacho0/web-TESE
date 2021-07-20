import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-contador',
  templateUrl: './cuerpo-contador.component.html',
  styleUrls: ['./cuerpo-contador.component.css']
})
export class CuerpoContadorComponent implements OnInit {

  Obj: Observable<any[]>
  PerEgre: Observable<any[]>
  Tit: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
       this.Obj = firestore.collectionGroup('Objetivo-Contador').valueChanges();
       this.PerEgre = firestore.collectionGroup('PerfilEgreso-Contador').valueChanges();
       this.Tit = firestore.collectionGroup('TituloBoton-Contador').valueChanges();
       this.Cit = firestore.collectionGroup('ContenidoBoton-Contador').valueChanges();
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

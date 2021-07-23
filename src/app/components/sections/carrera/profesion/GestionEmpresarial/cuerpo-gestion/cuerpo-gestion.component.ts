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
  Bot: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.Obj = firestore.collectionGroup('Objetivo-Gestion').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Gestion').valueChanges();
    this.Bot = firestore.collectionGroup('Boton-Gestion').valueChanges();
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

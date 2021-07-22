import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-electronica',
  templateUrl: './cuerpo-electronica.component.html',
  styleUrls: ['./cuerpo-electronica.component.css']
})
export class CuerpoElectronicaComponent implements OnInit {

  Fun: Observable<any[]>
  Obj: Observable<any[]>
  PerProf: Observable<any[]>
  PerEgre: Observable<any[]>
  Bot: Observable<any[]>
  Vis: Observable<any[]>

  constructor(firestore: AngularFirestore) {
       this.Fun = firestore.collectionGroup('Funcion-Electronica').valueChanges();
       this.Obj = firestore.collectionGroup('Objetivo-Electronica').valueChanges();
       this.PerProf = firestore.collectionGroup('PerfilProfesional-Electronica').valueChanges();
       this.PerEgre = firestore.collectionGroup('PerfilEgreso-Electronica').valueChanges();
       this.Bot = firestore.collectionGroup('Boton-Electronica').valueChanges();
       this.Vis = firestore.collectionGroup('Vision-Electronica').valueChanges();
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

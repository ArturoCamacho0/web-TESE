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
  Tit: Observable<any[]>
  Vis: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
       this.Fun = firestore.collection('Funcion-Electronica').valueChanges();
       this.Obj = firestore.collection('Objetivo-Electronica').valueChanges();
       this.PerProf = firestore.collection('PerfilProfesional-Electronica').valueChanges();
       this.PerEgre = firestore.collection('PerfilEgreso-Electronica').valueChanges();
       this.Tit = firestore.collection('TituloBoton-Electronica').valueChanges();
       this.Cit = firestore.collection('ContenidoBoton-Electronica').valueChanges();
       this.Vis = firestore.collection('Vision-Electronica').valueChanges();
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

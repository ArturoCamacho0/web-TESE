import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-aeronautica',
  templateUrl: './cuerpo-aeronautica.component.html',
  styleUrls: ['./cuerpo-aeronautica.component.css']
})
export class CuerpoAeronauticaComponent implements OnInit {

  Info: Observable<any[]>
  CamLab: Observable<any[]>
  Obj: Observable<any[]>
  PerEgre: Observable<any[]>
  PerIng: Observable<any[]>
  Tit: Observable<any[]>
  Cit: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.Info = firestore.collectionGroup('Info').valueChanges();
    this.CamLab = firestore.collectionGroup('CampoLaboral-Aeronautica').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Aeronautica').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Aeronautica').valueChanges();
    this.PerIng = firestore.collectionGroup('PerfilIngreso-Aeronautica').valueChanges();
    this.Tit = firestore.collectionGroup('TituloBoton-Aeronautica').valueChanges();
    this.Cit = firestore.collectionGroup('ContenidoBoton-Aeronautica').valueChanges();
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


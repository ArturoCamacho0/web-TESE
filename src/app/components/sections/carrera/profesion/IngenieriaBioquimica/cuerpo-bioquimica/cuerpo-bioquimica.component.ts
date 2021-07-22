import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-bioquimica',
  templateUrl: './cuerpo-bioquimica.component.html',
  styleUrls: ['./cuerpo-bioquimica.component.css']
})
export class CuerpoBioquimicaComponent implements OnInit {

  CamLab: Observable<any[]>
  Obj: Observable<any[]>
  ObjGen: Observable<any[]>
  PerEgre: Observable<any[]>
  Bot: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.CamLab = firestore.collectionGroup('CampoLaboral-Bioquimica').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Bioquimica').valueChanges();
    this.ObjGen = firestore.collectionGroup('ObjetivoGeneral-Bioquimica').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Bioquimica').valueChanges();
    this.Bot = firestore.collectionGroup('Boton-Bioquimica').valueChanges();
  }

  ngOnInit(): void {
  }

}

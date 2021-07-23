import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-mecatronica',
  templateUrl: './cuerpo-mecatronica.component.html',
  styleUrls: ['./cuerpo-mecatronica.component.css']
})
export class CuerpoMecatronicaComponent implements OnInit {

  CamLab: Observable<any[]>
  Obj: Observable<any[]>
  ObjG: Observable<any[]>
  PerEgre: Observable<any[]>
  Bot: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.CamLab = firestore.collectionGroup('CampoLaboral-Mecatronica').valueChanges();
    this.Obj = firestore.collectionGroup('Objetivo-Mecatronica').valueChanges();
    this.ObjG = firestore.collectionGroup('ObjetivoGeneral-Mecatronica').valueChanges();
    this.PerEgre = firestore.collectionGroup('PerfilEgreso-Mecatronica').valueChanges();
    this.Bot = firestore.collectionGroup('Boton-Mecatronica').valueChanges();
  }

  ngOnInit(): void {
  }

}

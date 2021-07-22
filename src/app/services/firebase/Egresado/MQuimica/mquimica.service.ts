import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MquimicaService {

  constructor(private firestore: AngularFirestore) { }

  crearConcepto(Concepto:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ConceptosMquimica').add(Concepto);
  }



  getConcepto():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ConceptosMquimica').snapshotChanges();
  }


}

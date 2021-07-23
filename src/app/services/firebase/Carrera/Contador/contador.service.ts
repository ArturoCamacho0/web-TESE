import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Contador/Objetivo-Contador').add(Objetivo);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Contador/PerfilEgreso-Contador').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Contador/Boton-Contador').add(Doc);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/Contador/Objetivo-Contador').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/Contador/PerfilEgreso-Contador').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Contador/Boton-Contador').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Contador/Objetivo-Contador').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Contador/PerfilEgreso-Contador').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Contador/Boton-Contador').doc(id).delete();
  }


}

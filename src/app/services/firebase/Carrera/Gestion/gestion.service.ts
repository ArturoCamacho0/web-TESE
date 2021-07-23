import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/GestionEmpresarial/Objetivo-Gestion').add(Objetivo);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/GestionEmpresarial/PerfilEgreso-Gestion').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/GestionEmpresarial/Boton-Gestion').add(Doc);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/GestionEmpresarial/Objetivo-Gestion').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/GestionEmpresarial/PerfilEgreso-Gestion').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/GestionEmpresarial/Boton-Gestion').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/GestionEmpresarial/Objetivo-Gestion').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/GestionEmpresarial/PerfilEgreso-Gestion').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/GestionEmpresarial/Boton-Gestion').doc(id).delete();
  }


}

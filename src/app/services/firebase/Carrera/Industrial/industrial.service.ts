import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndustrialService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/Objetivo-Industrial').add(Objetivo);
  }
  crearObjetivoG(ObjetivoG:any): Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/ObjetivoGeneral-Industrial').add(ObjetivoG);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/PerfilEgreso-Industrial').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/Boton-Industrial').add(Doc);
  }
  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/CampoLaboral-Industrial').add(Campo);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/Industrial/Objetivo-Industrial').snapshotChanges();
  }
  getObjetivoG():Observable<any>{
    return this.firestore.collection('/Carrera/Industrial/ObjetivoGeneral-Industrial').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/Industrial/PerfilEgreso-Industrial').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Industrial/Boton-Industrial',ref=>ref.orderBy('id_Doc','asc')).snapshotChanges();
  }
  getCampo():Observable<any>{
    return this.firestore.collection('/Carrera/Industrial/CampoLaboral-Industrial').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/Objetivo-Industrial').doc(id).delete();
  }
  eliminaObjetivoG(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/ObjetivoGeneral-Industrial').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/PerfilEgreso-Industrial').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/Boton-Industrial').doc(id).delete();
  }
  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Industrial/CampoLaboral-Industrial').doc(id).delete();
  }


}

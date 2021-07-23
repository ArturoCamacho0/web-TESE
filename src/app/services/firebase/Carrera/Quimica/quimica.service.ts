import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuimicaService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/Objetivo-Quimica').add(Objetivo);
  }
  crearObjetivoG(ObjetivoG:any): Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/ObjetivoGeneral-Quimica').add(ObjetivoG);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/PerfilEgreso-Quimica').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/Boton-Quimica').add(Doc);
  }
  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/CampoLaboral-Quimica').add(Campo);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/Quimica/Objetivo-Quimica').snapshotChanges();
  }
  getObjetivoG():Observable<any>{
    return this.firestore.collection('/Carrera/Quimica/ObjetivoGeneral-Quimica').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/Quimica/PerfilEgreso-Quimica').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Quimica/Boton-Quimica',ref=>ref.orderBy('id_Doc','asc')).snapshotChanges();
  }
  getCampo():Observable<any>{
    return this.firestore.collection('/Carrera/Quimica/CampoLaboral-Quimica').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/Objetivo-Quimica').doc(id).delete();
  }
  eliminaObjetivoG(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/ObjetivoGeneral-Quimica').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/PerfilEgreso-Quimica').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/Boton-Quimica').doc(id).delete();
  }
  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Quimica/CampoLaboral-Quimica').doc(id).delete();
  }


}

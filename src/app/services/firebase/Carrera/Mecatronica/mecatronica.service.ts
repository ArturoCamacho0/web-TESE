import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MecatronicaService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/Objetivo-Mecatronica').add(Objetivo);
  }
  crearObjetivoG(ObjetivoG:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/ObjetivoGeneral-Mecatronica').add(ObjetivoG);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/PerfilEgreso-Mecatronica').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/Boton-Mecatronica').add(Doc);
  }
  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/CampoLaboral-Mecatronica').add(Campo);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/Mecatronica/Objetivo-Mecatronica').snapshotChanges();
  }
  getObjetivoG():Observable<any>{
    return this.firestore.collection('/Carrera/Mecatronica/ObjetivoGeneral-Mecatronica').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/Mecatronica/PerfilEgreso-Mecatronica').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Mecatronica/Boton-Mecatronica',ref=>ref.orderBy('id_Doc','asc')).snapshotChanges();
  }
  getCampo():Observable<any>{
    return this.firestore.collection('/Carrera/Mecatronica/CampoLaboral-Mecatronica').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/Objetivo-Mecatronica').doc(id).delete();
  }
  eliminaObjetivoG(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/ObjetivoGeneral-Mecatronica').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/PerfilEgreso-Mecatronica').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/Boton-Mecatronica').doc(id).delete();
  }
  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecatronica/CampoLaboral-Mecatronica').doc(id).delete();
  }


}

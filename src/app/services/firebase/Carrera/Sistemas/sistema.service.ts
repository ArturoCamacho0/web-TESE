import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SistemasService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/Objetivo-Sistemas').add(Objetivo);
  }
  crearObjetivoG(ObjetivoG:any): Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/ObjetivoGestion-Sistemas').add(ObjetivoG);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/PerfilEgreso-Sistemas').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/Boton-Sistemas').add(Doc);
  }
  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/CampoLaboral-Sistemas').add(Campo);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/Objetivo-Sistemas').snapshotChanges();
  }
  getObjetivoG():Observable<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/ObjetivoGestion-Sistemas').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/PerfilEgreso-Sistemas').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/Boton-Sistemas',ref=>ref.orderBy('id_Doc','asc')).snapshotChanges();
  }
  getCampo():Observable<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/CampoLaboral-Sistemas').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/Objetivo-Sistemas').doc(id).delete();
  }
  eliminaObjetivoG(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/ObjetivoGestion-Sistemas').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/PerfilEgreso-Sistemas').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/Boton-Sistemas').doc(id).delete();
  }
  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/SistemasComputacionales/CampoLaboral-Sistemas').doc(id).delete();
  }


}

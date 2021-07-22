import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MecanicaService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/Objetivo-Mecanica').add(Objetivo);
  }
  crearObjetivoG(ObjetivoG:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/ObjetivoGeneral-Mecanica').add(ObjetivoG);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/PerfilEgreso-Mecanica').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/Boton-Mecanica').add(Doc);
  }
  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/CampoLaboral-Mecanica').add(Campo);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/Mecanica/Objetivo-Mecanica').snapshotChanges();
  }
  getObjetivoG():Observable<any>{
    return this.firestore.collection('/Carrera/Mecanica/ObjetivoGeneral-Mecanica').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/Mecanica/PerfilEgreso-Mecanica').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Mecanica/Boton-Mecanica',ref=>ref.orderBy('id_Doc','asc')).snapshotChanges();
  }
  getCampo():Observable<any>{
    return this.firestore.collection('/Carrera/Mecanica/CampoLaboral-Mecanica').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/Objetivo-Mecanica').doc(id).delete();
  }
  eliminaObjetivoG(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/ObjetivoGeneral-Mecanica').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/PerfilEgreso-Mecanica').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/Boton-Mecanica').doc(id).delete();
  }
  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Mecanica/CampoLaboral-Mecanica').doc(id).delete();
  }


}

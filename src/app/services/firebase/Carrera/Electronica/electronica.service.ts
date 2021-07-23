import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronicaService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/Objetivo-Electronica').add(Objetivo);
  }
  crearPerfil(Perfil:any): Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/PerfilProfesional-Electronica').add(Perfil);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/PerfilEgreso-Electronica').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/Boton-Electronica').add(Doc);
  }
  crearFuncion(Funcion:any): Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/Funcion-Electronica').add(Funcion);
  }
  crearVision(Vision:any): Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/Vision-Electronica').add(Vision);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/Electronica/Objetivo-Electronica').snapshotChanges();
  }
  getPerfil():Observable<any>{
    return this.firestore.collection('/Carrera/Electronica/PerfilProfesional-Electronica').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/Electronica/PerfilEgreso-Electronica').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Electronica/Boton-Electronica',ref=>ref.orderBy('id_Doc','asc')).snapshotChanges();
  }
  getFuncion():Observable<any>{
    return this.firestore.collection('/Carrera/Electronica/Funcion-Electronica').snapshotChanges();
  }
  getVision():Observable<any>{
    return this.firestore.collection('/Carrera/Electronica/Vision-Electronica').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/Objetivo-Electronica').doc(id).delete();
  }
  eliminaPerfil(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/PerfilProfesional-Electronica').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/PerfilEgreso-Electronica').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/Boton-Electronica').doc(id).delete();
  }
  eliminaFuncion(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/Funcion-Electronica').doc(id).delete();
  }
  eliminaVision(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Electronica/Vision-Electronica').doc(id).delete();
  }


}

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformaticaService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Informatica/Objetivo-Informatica').add(Objetivo);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Informatica/PerfilEgreso-Informatica').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Informatica/Boton-Informatica').add(Doc);
  }
  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Informatica/CampoLaboral-Informatica').add(Campo);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/Informatica/Objetivo-Informatica').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/Informatica/PerfilEgreso-Informatica').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Informatica/Boton-Informatica',ref=>ref.orderBy('id_Doc','asc')).snapshotChanges();
  }
  getCampo():Observable<any>{
    return this.firestore.collection('/Carrera/Informatica/CampoLaboral-Informatica').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Informatica/Objetivo-Informatica').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Informatica/PerfilEgreso-Informatica').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Informatica/Boton-Informatica').doc(id).delete();
  }
  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Informatica/CampoLaboral-Informatica').doc(id).delete();
  }


}

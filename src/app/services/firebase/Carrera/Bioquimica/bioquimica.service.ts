import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BioquimicaService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/Objetivo-Bioquimica').add(Objetivo);
  }
  crearObjetivoG(ObjetivoG:any): Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/ObjetivoGeneral-Bioquimica').add(ObjetivoG);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/PerfilEgreso-Bioquimica').add(Egreso);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/Boton-Bioquimica').add(Doc);
  }
  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/CampoLaboral-Bioquimica').add(Campo);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/Bioquimica/Objetivo-Bioquimica').snapshotChanges();
  }
  getObjetivoG():Observable<any>{
    return this.firestore.collection('/Carrera/Bioquimica/ObjetivoGeneral-Bioquimica').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/Bioquimica/PerfilEgreso-Bioquimica').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Bioquimica/Boton-Bioquimica',ref=>ref.orderBy('id_Doc','asc')).snapshotChanges();
  }
  getCampo():Observable<any>{
    return this.firestore.collection('/Carrera/Bioquimica/CampoLaboral-Bioquimica').snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/Objetivo-Bioquimica').doc(id).delete();
  }
  eliminaObjetivoG(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/ObjetivoGeneral-Bioquimica').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/PerfilEgreso-Bioquimica').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/Boton-Bioquimica').doc(id).delete();
  }
  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Bioquimica/CampoLaboral-Bioquimica').doc(id).delete();
  }


}

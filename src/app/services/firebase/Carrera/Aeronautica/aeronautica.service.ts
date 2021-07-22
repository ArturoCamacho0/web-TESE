import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AeronauticaService {

  constructor(private firestore: AngularFirestore) {}

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/Objetivo-Aeronautica').add(Objetivo);
  }
  crearIngreso(Ingreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/PerfilIngreso-Aeronautica').add(Ingreso);
  }
  crearEgreso(Egreso:any): Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/PerfilEgreso-Aeronautica').add(Egreso);
  }
  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/CampoLaboral-Aeronautica').add(Campo);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/Boton-Aeronautica').add(Doc);
  }


  getObjetivo():Observable<any>{
    return this.firestore.collection('/Carrera/Aeronautica/Objetivo-Aeronautica').snapshotChanges();
  }
  getEgreso():Observable<any>{
    return this.firestore.collection('/Carrera/Aeronautica/PerfilEgreso-Aeronautica').snapshotChanges();
  }
  getIngreso():Observable<any>{
    return this.firestore.collection('/Carrera/Aeronautica/PerfilIngreso-Aeronautica').snapshotChanges();
  }
  getCampo():Observable<any>{
    return this.firestore.collection('/Carrera/Aeronautica/CampoLaboral-Aeronautica').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Aeronautica/Boton-Aeronautica',ref=>ref.orderBy('id_doc','asc')).snapshotChanges();
  }


  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/Objetivo-Aeronautica').doc(id).delete();
  }
  eliminaEgreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/PerfilEgreso-Aeronautica').doc(id).delete();
  }
  eliminaIngreso(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/PerfilIngreso-Aeronautica').doc(id).delete();
  }
  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/CampoLaboral-Aeronautica').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Aeronautica/Boton-Aeronautica').doc(id).delete();
  }


}

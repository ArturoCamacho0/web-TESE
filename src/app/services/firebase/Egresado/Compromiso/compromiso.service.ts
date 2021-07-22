import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompromisoService {

  constructor(private firestore: AngularFirestore) { }

  crearCompromiso(Compromiso:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ServicioALaComunidad/CompromisoS').add(Compromiso);
  }

  getCompromiso():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ServicioALaComunidad/CompromisoS').snapshotChanges();
  }

  eliminaCompromiso(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ServicioALaComunidad/CompromisoS').doc(id).delete();
  }

  crearInea(Inea:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ServicioALaComunidad/Inea').add(Inea);
  }

  getInea():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ServicioALaComunidad/Inea').snapshotChanges();
  }

  eliminaInea(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ServicioALaComunidad/Inea').doc(id).delete();
  }
}

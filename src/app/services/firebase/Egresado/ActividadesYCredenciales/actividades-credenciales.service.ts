import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadesCredencialesService {

  constructor(private firestore: AngularFirestore) { }

  crearActividad(Actividad:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ActividadesYCredenciales/Actividades').add(Actividad);
  }

  getActividad():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ActividadesYCredenciales/Actividades').snapshotChanges();
  }

  eliminaActividad(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ActividadesYCredenciales/Actividades').doc(id).delete();
  }

  crearBeneficio(Beneficio:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ActividadesYCredenciales/Beneficios').add(Beneficio);
  }

  getBeneficio():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ActividadesYCredenciales/Beneficios').snapshotChanges();
  }

  eliminaBeneficio(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ActividadesYCredenciales/Beneficios').doc(id).delete();
  }

  crearCredencial(Credencial:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ActividadesYCredenciales/Credencial').add(Credencial);
  }

  getCredencial():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ActividadesYCredenciales/Credencial').snapshotChanges();
  }

  eliminaCredencial(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/ActividadesYCredenciales/Credencial').doc(id).delete();
  }
}



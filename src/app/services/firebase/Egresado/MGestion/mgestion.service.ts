import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MgestionService {

  constructor(private firestore: AngularFirestore) { }

  crearConcepto(Concepto:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/ConceptosGestion').add(Concepto);
  }

  getConcepto():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/ConceptosGestion').snapshotChanges();
  }

  eliminaConcepto(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/ConceptosGestion').doc(id).delete();
  }

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/ObjetivoGestion').add(Objetivo);
  }

  getObjetivo():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/ObjetivoGestion').snapshotChanges();
  }

  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/ObjetivoGestion').doc(id).delete();
  }

  crearPerfil(Perfil:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/PerfilGestion').add(Perfil);
  }

  getPerfil():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/PerfilGestion').snapshotChanges();
  }

  eliminaPerfil(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/PerfilGestion').doc(id).delete();
  }

  crearEstructura(Estructura:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/EstructuraGestion').add(Estructura);
  }

  getEstructura():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/EstructuraGestion').snapshotChanges();
  }

  eliminaEstructura(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/EstructuraGestion').doc(id).delete();
  }

  crearDuracion(MateriaO:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/DuracionGestion').add(MateriaO);
  }

  getDuracion():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/DuracionGestion').snapshotChanges();
  }

  eliminaDuracion(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/DuracionGestion').doc(id).delete();
  }

  crearCarrera(Carrera:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/CarrerasGestion').add(Carrera);
  }

  getCarrera():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/CarrerasGestion').snapshotChanges();
  }

  eliminaCarrera(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MGestionAdministrativa/CarrerasGestion').doc(id).delete();
  }
}



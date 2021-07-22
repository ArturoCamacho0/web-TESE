import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MmecatronicaService {

  constructor(private firestore: AngularFirestore) { }

  crearConcepto(Concepto:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/ConceptosMmecatronica').add(Concepto);
  }

  getConcepto():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/ConceptosMmecatronica').snapshotChanges();
  }

  eliminaConcepto(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/ConceptosMmecatronica').doc(id).delete();
  }

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/ObjetivoMmecatronica').add(Objetivo);
  }

  getObjetivo():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/ObjetivoMmecatronica').snapshotChanges();
  }

  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/ObjetivoMmecatronica').doc(id).delete();
  }

  crearPerfil(Perfil:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/PerfilMmecatronica').add(Perfil);
  }

  getPerfil():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/PerfilMmecatronica').snapshotChanges();
  }

  eliminaPerfil(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/PerfilMmecatronica').doc(id).delete();
  }

  crearEstructura(Estructura:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/EstructuraMmecatronica').add(Estructura);
  }

  getEstructura():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/EstructuraMmecatronica').snapshotChanges();
  }

  eliminaEstructura(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/EstructuraMmecatronica').doc(id).delete();
  }

  crearArea(Area:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/AreasMmecatronica').add(Area);
  }

  getArea():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/AreasMmecatronica').snapshotChanges();
  }

  eliminaArea(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/Mmecatronica/AreasMmecatronica').doc(id).delete();
  }
}


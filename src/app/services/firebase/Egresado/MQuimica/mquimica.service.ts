import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MquimicaService {

  constructor(private firestore: AngularFirestore) { }

  crearConcepto(Concepto:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ConceptosMquimica').add(Concepto);
  }

  getConcepto():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ConceptosMquimica').snapshotChanges();
  }

  eliminaConcepto(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ConceptosMquimica').doc(id).delete();
  }

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ObjetivoMquimica').add(Objetivo);
  }

  getObjetivo():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ObjetivoMquimica').snapshotChanges();
  }

  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/ObjetivoMquimica').doc(id).delete();
  }

  crearPerfil(Perfil:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/PerfilMquimica').add(Perfil);
  }

  getPerfil():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/PerfilMquimica').snapshotChanges();
  }

  eliminaPerfil(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/PerfilMquimica').doc(id).delete();
  }

  crearMateriaB(MateriaB:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/QuimicaMateriasBasicas').add(MateriaB);
  }

  getMateriaB():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/QuimicaMateriasBasicas').snapshotChanges();
  }

  eliminaMateriaB(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/QuimicaMateriasBasicas').doc(id).delete();
  }

  crearMateriaO(MateriaO:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/QuimicaMateriasOptativas').add(MateriaO);
  }

  getMateriaO():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/QuimicaMateriasOptativas').snapshotChanges();
  }

  eliminaMateriaO(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/QuimicaMateriasOptativas').doc(id).delete();
  }

  crearArea(Area:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/AreaMquimica').add(Area);
  }

  getArea():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/AreaMquimica').snapshotChanges();
  }

  eliminaArea(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/AreaMquimica').doc(id).delete();
  }

  editarArea(Area : any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaQuimica/AreaMquimica').doc(Area.id).set(Area);
  }
}

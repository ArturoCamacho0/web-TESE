import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MbioquimicaService {

  constructor(private firestore: AngularFirestore) { }

  crearConcepto(Concepto:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/ConceptosMbioquimica').add(Concepto);
  }

  getConcepto():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/ConceptosMbioquimica').snapshotChanges();
  }

  eliminaConcepto(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/ConceptosMbioquimica').doc(id).delete();
  }

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/ObjetivoMbioquimica').add(Objetivo);
  }

  getObjetivo():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/ObjetivoMbioquimica').snapshotChanges();
  }

  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/ObjetivoMbioquimica').doc(id).delete();
  }

  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/CampoMbioquimica').add(Campo);
  }

  getCampo():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/CampoMbioquimica').snapshotChanges();
  }

  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/CampoMbioquimica').doc(id).delete();
  }

  crearPerfil(Perfil:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/PerfilMbioquimica').add(Perfil);
  }

  getPerfil():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/PerfilMbioquimica').snapshotChanges();
  }

  eliminaPerfil(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/PerfilMbioquimica').doc(id).delete();
  }

  crearMateriaB(MateriaB:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/BioquimicaMateriasBasicas').add(MateriaB);
  }

  getMateriaB():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/BioquimicaMateriasBasicas').snapshotChanges();
  }

  eliminaMateriaB(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/BioquimicaMateriasBasicas').doc(id).delete();
  }

  crearMateriaO(MateriaO:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/BioquimicaMateriasOptativas').add(MateriaO);
  }

  getMateriaO():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/BioquimicaMateriasOptativas').snapshotChanges();
  }

  eliminaMateriaO(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/BioquimicaMateriasOptativas').doc(id).delete();
  }

  crearArea(Area:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/AreaMbioquimica').add(Area);
  }

  getArea():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/AreaMbioquimica').snapshotChanges();
  }

  eliminaArea(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MCienciasIngenieriaBioquimica/AreaMbioquimica').doc(id).delete();
  }
}

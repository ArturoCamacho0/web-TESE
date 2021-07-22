import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeficienciaService {

  constructor(private firestore: AngularFirestore) { }

  crearConcepto(Concepto:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/ConceptosMeficiencia').add(Concepto);
  }

  getConcepto():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/ConceptosMeficiencia').snapshotChanges();
  }

  eliminaConcepto(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/ConceptosMeficiencia').doc(id).delete();
  }

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/ObjetivoMeficiencia').add(Objetivo);
  }

  getObjetivo():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/ObjetivoMeficiencia').snapshotChanges();
  }

  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/ObjetivoMeficiencia').doc(id).delete();
  }

  crearPerfil(Perfil:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/PerfilMeficiencia').add(Perfil);
  }

  getPerfil():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/PerfilMeficiencia').snapshotChanges();
  }

  eliminaPerfil(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/PerfilMeficiencia').doc(id).delete();
  }

  crearMateriaB(MateriaB:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/EficienciaMateriasBasicas').add(MateriaB);
  }

  getMateriaB():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/EficienciaMateriasBasicas').snapshotChanges();
  }

  eliminaMateriaB(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/EficienciaMateriasBasicas').doc(id).delete();
  }

  crearMateriaO(MateriaO:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/EficienciaMateriasOptativas').add(MateriaO);
  }

  getMateriaO():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/EficienciaMateriasOptativas').snapshotChanges();
  }

  eliminaMateriaO(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/EficienciaMateriasOptativas').doc(id).delete();
  }

  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/CampoMeficiencia').add(Campo);
  }

  getCampo():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/CampoMeficiencia').snapshotChanges();
  }

  eliminaCampo(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MEficienciaEnergetica/CampoMeficiencia').doc(id).delete();
  }
}


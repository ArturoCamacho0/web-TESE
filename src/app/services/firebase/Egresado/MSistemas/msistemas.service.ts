import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsistemasService {

  constructor(private firestore: AngularFirestore) { }

  crearConcepto(Concepto:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/ConceptosMsistemas').add(Concepto);
  }

  getConcepto():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/ConceptosMsistemas').snapshotChanges();
  }

  eliminaConcepto(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/ConceptosMsistemas').doc(id).delete();
  }

  crearDirigido(Dirigido:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/DirigidoMSistemas').add(Dirigido);
  }

  getDirigido():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/DirigidoMSistemas').snapshotChanges();
  }

  eliminaDirigido(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/DirigidoMSistemas').doc(id).delete();
  }

  crearPerfilI(PerfilI:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/PerfilIMsistemas').add(PerfilI);
  }

  getPerfilI():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/PerfilIMsistemas').snapshotChanges();
  }

  eliminaPerfilI(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/PerfilIMsistemas').doc(id).delete();
  }

  crearPerfilE(PerfilE:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/PerfilEMsistemas').add(PerfilE);
  }

  getPerfilE():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/PerfilEMsistemas').snapshotChanges();
  }

  eliminaPerfilE(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/PerfilEMsistemas').doc(id).delete();
  }

  crearRequisito(Requisito:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/RequisitosMsistemas').add(Requisito);
  }

  getRequisito():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/RequisitosMsistemas').snapshotChanges();
  }

  eliminaRequisito(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/RequisitosMsistemas').doc(id).delete();
  }

  crearDocumento(Documento:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/DocumentosMsistemas').add(Documento);
  }

  getDocumento():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/DocumentosMsistemas').snapshotChanges();
  }

  eliminaDocumento(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/DocumentosMsistemas').doc(id).delete();
  }

  crearMision(Mision:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/MisionMsistemas').add(Mision);
  }

  getMision():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/MisionMsistemas').snapshotChanges();
  }

  eliminaMision(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/MisionMsistemas').doc(id).delete();
  }

  crearVision(Vision:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/VisionMsistemas').add(Vision);
  }

  getVision():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/VisionMsistemas').snapshotChanges();
  }

  eliminaVision(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/VisionMsistemas').doc(id).delete();
  }

  crearLinea(Linea:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/LineasMsistemas').add(Linea);
  }

  getLinea():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/LineasMsistemas').snapshotChanges();
  }

  eliminaLinea(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/MSistemasComputacionales/LineasMsistemas').doc(id).delete();
  }
}


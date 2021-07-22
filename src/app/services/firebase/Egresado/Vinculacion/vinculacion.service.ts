import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VinculacionService {

  constructor(private firestore: AngularFirestore) { }

  crearVinculacion(Vinculacion:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Vinculacion').add(Vinculacion);
  }

  getVinculacion():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Vinculacion').snapshotChanges();
  }

  eliminaVinculacion(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Vinculacion').doc(id).delete();
  }

  crearObjetivo(Objetivo:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Objetivo').add(Objetivo);
  }

  getObjetivo():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Objetivo').snapshotChanges();
  }

  eliminaObjetivo(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Objetivo').doc(id).delete();
  }

  crearEgresados(Egresados:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Egresados').add(Egresados);
  }

  getEgresados():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Egresados').snapshotChanges();
  }

  eliminaEgresados(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Egresados').doc(id).delete();
  }

  crearEmpresas(Empresas:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Empresas').add(Empresas);
  }

  getEmpresas():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Empresas').snapshotChanges();
  }

  eliminaEmpresas(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Empresas').doc(id).delete();
  }

  crearIncubadora(Incubadora:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Incubadora').add(Incubadora);
  }

  getIncubadora():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Incubadora').snapshotChanges();
  }

  eliminaIncubadora(id:string): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/VinculacionEmpresarial/Incubadora').doc(id).delete();
  }
  
}


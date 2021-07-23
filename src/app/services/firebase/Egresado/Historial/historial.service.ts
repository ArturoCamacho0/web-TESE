import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private firestore: AngularFirestore) { }

  crearhistorial(historial:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/Historial').add(historial);
  }

  gethistorial():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/Historial').snapshotChanges();
  }

  eliminahistorial(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/Historial').doc(id).delete();
  }

  crearDocumentoE(DocumentoE:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/DocE').add(DocumentoE);
  }

  getDocumentoE():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/DocE').snapshotChanges();
  }

  eliminaDocumentoE(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/DocE').doc(id).delete();
  }

  crearDocumentoO(DocuemntoO:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/DocO').add(DocuemntoO);
  }

  getDocumentoO():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/DocO').snapshotChanges();
  }

  eliminaDocumentoO(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/DocO').doc(id).delete();
  }

  crearHorario(Horario:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/Horario').add(Horario);
  }

  getHorario():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/Horario').snapshotChanges();
  }

  eliminaHorario(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/HistorialAcademico/Horario').doc(id).delete();
  }
}

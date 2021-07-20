import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MisionService {

  constructor(private firestore: AngularFirestore) {

   }

   agregarMision(mision_contenido: any) : Promise<any>{
     return this.firestore.collection('/Identidad/Mision/MisionDatos').add(mision_contenido);

   }

   getContenido_Mision(): Observable<any>{
    return this.firestore.collection('/Identidad/Mision/MisionDatos').snapshotChanges();
  }

  eliminarContenido_Mision(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Mision/MisionDatos').doc(id).delete();
  }

   agregarDocumento(documento: any) : Promise<any>{
     return this.firestore.collection('/Identidad/Mision/MisionDocumentos').add(documento);

   }

   getDocumento(): Observable<any>{
    return this.firestore.collection('/Identidad/Mision/MisionDocumentos').snapshotChanges();
  }

  eliminarDocumento(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Mision/MisionDocumentos').doc(id).delete();
  }

  getOrganigrama(): Observable<any>{
    return this.firestore.collection('/Identidad/Organigrama/DatosOrganigrama').snapshotChanges();
  }






}

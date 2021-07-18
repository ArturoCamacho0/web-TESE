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

   agregarDocumento(documento: any) : Promise<any>{
     return this.firestore.collection('/Identidad/Mision/MisionDocumentos').add(documento);

   }

   eliminarContenido_Mision(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Mision/MisionDatos').doc(id).delete();
  }




}

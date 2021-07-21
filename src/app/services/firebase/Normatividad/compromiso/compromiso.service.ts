import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompromisoService {

  constructor(private firestore: AngularFirestore) {


  }


  getContenido_I(): Observable<any>{
    return this.firestore.collection('/Normatividad/compromiso/texto', ref => ref.orderBy('id_contenido','asc')).snapshotChanges();
  }

  getContenido_N(): Observable<any>{
    return this.firestore.collection('/Normatividad/compromiso/info', ref => ref.orderBy('id_contenido','asc')).snapshotChanges();
  }

  getContenido_L(): Observable<any>{
    return this.firestore.collection('/Normatividad/compromiso/img', ref => ref.orderBy('id_contenido','asc')).snapshotChanges();
  }


  getTitulos(): Observable<any>{
    return this.firestore.collection('/Normatividad/compromiso/titulo').snapshotChanges();
  }



  agregarContenido_I(contenido_I:any): Promise<any>{
    return this.firestore.collection('/Normatividad/compromiso/texto').add(contenido_I);
   }



   eliminarContenido_I(id: string): Promise<any>{
    return this.firestore.collection('/Normatividad/compromiso/texto').doc(id).delete();
  }}
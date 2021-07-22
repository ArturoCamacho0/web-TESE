import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private firestore: AngularFirestore) {


  }


  getContenido_I(): Observable<any>{
    return this.firestore.collection('/AdmisionYTramites/Inscripcion/Contenidos-Inscripcion/', ref => ref.orderBy('id_contenido','asc')).snapshotChanges();
  }


  getTitulos(): Observable<any>{
    return this.firestore.collection('/AdmisionYTramites/Inscripcion/Titulos-Inscripcion').snapshotChanges();
  }



  agregarContenido_I(contenido_I:any): Promise<any>{
    return this.firestore.collection('/AdmisionYTramites/Inscripcion/Contenidos-Inscripcion').add(contenido_I);
   }



   eliminarContenido_I(id: string): Promise<any>{
    return this.firestore.collection('/AdmisionYTramites/Inscripcion/Contenidos-Inscripcion').doc(id).delete();
  }

  /* Precio */

  getContenido_P(): Observable<any>{
    return this.firestore.collection('/AdmisionYTramites/Inscripcion/Contenidos-Precio/', ref => ref.orderBy('id_precio','asc')).snapshotChanges();
  }


  agregarContenido_P(contenido_P:any): Promise<any>{
    return this.firestore.collection('/AdmisionYTramites/Inscripcion/Contenidos-Precio/').add(contenido_P);
   }


   eliminarContenido_P(id: string): Promise<any>{
    return this.firestore.collection('/AdmisionYTramites/Inscripcion/Contenidos-Precio/').doc(id).delete();
  }

/* Fechas */


getContenido_F(): Observable<any>{
  return this.firestore.collection('/AdmisionYTramites/Inscripcion/Contenidos-Fechas/', ref => ref.orderBy('id_fecha','asc')).snapshotChanges();
}


agregarContenido_F(contenido_F:any): Promise<any>{
  return this.firestore.collection('/AdmisionYTramites/Inscripcion/Contenidos-Fechas/').add(contenido_F);
 }

 eliminarContenido_F(id: string): Promise<any>{
  return this.firestore.collection('/AdmisionYTramites/Inscripcion/Contenidos-Fechas/').doc(id).delete();
}










}



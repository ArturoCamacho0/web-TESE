import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class ReinscripcionService {

  constructor(private firestore: AngularFirestore) {

  }


  getContenido_R(): Observable<any>{
    return this.firestore.collection('/AdmisionYTramites/Reinscripcion/Contenido-Principal/', ref => ref.orderBy('id_contenido','asc')).snapshotChanges();
  }




getTitulos(): Observable<any>{
  return this.firestore.collection('/AdmisionYTramites/Reinscripcion/Titulos-Reinscripcion').snapshotChanges();
}


agregarContenido_R(contenido_R:any): Promise<any>{
  return this.firestore.collection('/AdmisionYTramites/Reinscripcion/Contenido-Principal/').add(contenido_R);
 }

/* Parrafo2 */

getContenido_P2(): Observable<any>{
  return this.firestore.collection('/AdmisionYTramites/Reinscripcion/Contenido-Parrafo2', ref => ref.orderBy('id_contenido','asc')).snapshotChanges();
}


}

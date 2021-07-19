import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogoService {

  constructor(private firestore: AngularFirestore) { }

      agregarContenido(logo: any):Promise<any>{
      return this.firestore.collection("/Identidad/Logo/Contenidos-logo").add(logo);

    }

      getContenido_Logo(): Observable<any>{
        return this.firestore.collection("/Identidad/Logo/Contenidos-logo", ref => ref.orderBy('id_logo','asc')).snapshotChanges();
      }

      eliminarContenido_Logo(id: string): Promise<any>{
        return this.firestore.collection('/Identidad/Logo/Contenidos-logo').doc(id).delete();
      }

      getTitulos(): Observable<any>{
        return this.firestore.collection('/Identidad/Logo/Titulos-logo').snapshotChanges();
      }

      getImagen(): Observable<any>{
        return this.firestore.collection('/Identidad/Logo/Imagenes-logo').snapshotChanges();
      }

      getOrganigrama(): Observable<any>{
        return this.firestore.collection('/Identidad/Organigrama/DatosOrganigrama').snapshotChanges();
      }

      getImagenEdit(id: string): Observable<any>{
        return this.firestore.collection('/Identidad/Logo/Imagenes-logo').doc(id).snapshotChanges();
      }

      actualizarImagen(id: string, data:any): Promise<any>{
        return this.firestore.collection('/Identidad/Logo/Imagenes-logo').doc(id).update(data);
      }




}

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
}

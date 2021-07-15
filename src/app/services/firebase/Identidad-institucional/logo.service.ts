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
}

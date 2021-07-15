import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MisionService {

  constructor(private firestore: AngularFirestore) {
}


    agregarMiison(mision:any):Promise<any>{
      return this.firestore.collection('/Identidad/Mision/MisionDatos').add(mision);
    }
   }


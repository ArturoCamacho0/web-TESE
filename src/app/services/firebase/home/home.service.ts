import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // Inyectamos la dependencia para utilizar Firestore
  constructor(private db: AngularFirestore){}

  // Creamos una funcion que nos traiga todo el contenido
  getContent(): Observable<any>{
    return this.db.collection('/home').valueChanges();
  }

  // Creamos una funcion que guarde el contenido que le mandemos
  saveContent(data: any): Promise<any>{
    return this.db.collection('home').add(data);
  }

  // Creamos una funcion que nos traiga todo el contenido
  getLinks(): Observable<any>{
    return this.db.collection('/links_home').valueChanges();
  }

  getActivities(): Observable<any>{
    return this.db.collection('/actividades_home').valueChanges();
  }

  getCareers(): Observable<any>{
    return this.db.collection('/carreras_home').valueChanges();
  }
}

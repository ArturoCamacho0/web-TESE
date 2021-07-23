import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganigramaService {

  constructor(private firestore: AngularFirestore) {

  }
  getOrganigrama(): Observable<any>{
      return this.firestore.collection('/Identidad/Organigrama/DatosOrganigrama').snapshotChanges();
    }

  getOrganigramaEdit(id: string): Observable<any>{
    return this.firestore.collection('/Identidad/Organigrama/DatosOrganigrama').doc(id).snapshotChanges();
  }

  actualizarOrganigrama(id: string, data: any): Promise<any>{
    return this.firestore.collection('/Identidad/Organigrama/DatosOrganigrama').doc(id).update(data);
  }
}


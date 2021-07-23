import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private firestore: AngularFirestore) {}

  crearMision(Mision:any): Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/Mision-Carrera').add(Mision);
  }
  crearVision(Vision:any): Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/Vision-Carrera').add(Vision);
  }
  crearVisionDiv(VisionDiv:any): Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/VisionDivAcad-Carrera').add(VisionDiv);
  }
  crearMisionDiv(MisionDiv:any): Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/MisionDivAcad-Carrera').add(MisionDiv);
  }
  crearDoc(Doc:any): Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/Boton-Carrera').add(Doc);
  }
  getMision():Observable<any>{
    return this.firestore.collection('/Carrera/Carrera/Mision-Carrera',ref=>ref.orderBy('fechacreacion','asc')).snapshotChanges();
  }
  getVision():Observable<any>{
    return this.firestore.collection('/Carrera/Carrera/Vision-Carrera').snapshotChanges();
  }
  getVisionDiv():Observable<any>{
    return this.firestore.collection('/Carrera/Carrera/VisionDivAcad-Carrera').snapshotChanges();
  }
  getMisionDiv():Observable<any>{
    return this.firestore.collection('/Carrera/Carrera/MisionDivAcad-Carrera').snapshotChanges();
  }
  getDoc():Observable<any>{
    return this.firestore.collection('/Carrera/Carrera/Boton-Carrera').snapshotChanges();
  }
  getImagen():Observable<any>{
    return this.firestore.collection('/Carrera/Carrera/Imagen-Carrera').snapshotChanges();
  }

  actMision(id:string,data:any):Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/Mision-Carrera').doc(id).update(data);
  }

  eliminaMision(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/Mision-Carrera').doc(id).delete();
  }
  eliminaVision(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/Vision-Carrera').doc(id).delete();
  }
  eliminaVisionDiv(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/VisionDivAcad-Carrera').doc(id).delete();
  }
  eliminaMisionDiv(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/MisionDivAcad-Carrera').doc(id).delete();
  }
  eliminaDoc(id:string):Promise<any>{
    return this.firestore.collection('/Carrera/Carrera/Boton-Carrera').doc(id).delete();
  }


}

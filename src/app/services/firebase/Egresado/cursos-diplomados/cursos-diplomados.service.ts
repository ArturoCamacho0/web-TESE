import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosDiplomadosService {

  constructor(private firestore: AngularFirestore) { }

  crearCurso(Curso:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/Cursos').add(Curso);
  }

  getCurso():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/Cursos').snapshotChanges();
  }

  eliminaCurso(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/Cursos').doc(id).delete();
  }

  crearPerfil(Perfil:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/Perfil').add(Perfil);
  }

  getPerfil():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/Perfil').snapshotChanges();
  }

  eliminaPerfil(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/Perfil').doc(id).delete();
  }

  crearCampo(Campo:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/Campo').add(Campo);
  }

  getCampo():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/Campo').snapshotChanges();
  }

  eliminaCampo(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/Campo').doc(id).delete();
  }
  crearCCs(CCs:any): Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/CC').add(CCs);
  }

  getCCs():Observable<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/CC').snapshotChanges();
  }

  eliminaCCs(id:string):Promise<any>{
    return this.firestore.collection('/EgresadosYExalumnos/CursosYDiplomados/CC').doc(id).delete();
  }
}




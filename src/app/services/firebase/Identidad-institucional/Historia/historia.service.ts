import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(private firestore: AngularFirestore) {


   }
   agregarContenido_H(contenido_h:any): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Contenidos-historia').add(contenido_h);
   }

   getContenido_H(): Observable<any>{
    return this.firestore.collection('/Identidad/Historia/Contenidos-historia', ref => ref.orderBy('id_contenido','asc')).snapshotChanges();
  }

   eliminarContenido_H(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Contenidos-historia').doc(id).delete();
  }

   agregarCarrera(carrera: any): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1001/Contenido-dropdown').add(carrera);
   }

   getCarrera(): Observable<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1001/Contenido-dropdown').snapshotChanges();
  }

  eliminarCarrera(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1001/Contenido-dropdown').doc(id).delete();
  }

   agregarPosgrado(posgrado: any): Promise<any>{
     return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1000/Contenido-dropdownA').add(posgrado);
   }

   getPosgrado(): Observable<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1000/Contenido-dropdownA').snapshotChanges();
  }

  eliminarPosgrado(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1000/Contenido-dropdownA').doc(id).delete();
  }

   agregarPrograma(programa: any): Promise<any>{
     return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1002/Contenido-dropdownB').add(programa);
   }

   getPrograma(): Observable<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1002/Contenido-dropdownB', ref => ref.orderBy('id_programa','asc')).snapshotChanges();
  }

  eliminarPrograma(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1002/Contenido-dropdownB').doc(id).delete();
  }

   agregarAmbito(ambito: any): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1003/Contenido-dropdownC').add(ambito);
   }

   getAmbito(): Observable<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1003/Contenido-dropdownC', ref => ref.orderBy('id_ambito','asc')).snapshotChanges();
  }

  eliminarAmbito(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1003/Contenido-dropdownC').doc(id).delete();
  }

   agregarInvestigacion(investigacion: any): Promise<any>{
     return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1004/Contenido-dropdownD').add(investigacion);
   }

   getInvestigacion(): Observable<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1004/Contenido-dropdownD', ref => ref.orderBy('id_programa','asc')).snapshotChanges();
  }

  eliminarInvestigacion(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1004/Contenido-dropdownD').doc(id).delete();
  }

   agregarCurso(curso: any): Promise<any>{
     return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1005/Contenido-dropdownF').add(curso);
   }

   getCurso(): Observable<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1005/Contenido-dropdownF', ref => ref.orderBy('id_curso','asc')).snapshotChanges();
  }

  eliminarCurso(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1005/Contenido-dropdownF').doc(id).delete();
  }

   agregarNorma(norma: any): Promise<any>{
     return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1006/Contenido-dropdownE').add(norma);
   }

   getNorma(): Observable<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1006/Contenido-dropdownE', ref => ref.orderBy('id_norma','asc')).snapshotChanges();
  }

  eliminarNorma(id: string): Promise<any>{
    return this.firestore.collection('/Identidad/Historia/Dropdowns-historia/1006/Contenido-dropdownE').doc(id).delete();
  }



}

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion-historia',
  templateUrl: './administracion-historia.component.html',
  styleUrls: ['./administracion-historia.component.css']
})
export class AdministracionHistoriaComponent implements OnInit {


  contends_historia: Observable<any[]>
  dropdown_posgrados: Observable<any[]>
  dropdown_carreras: Observable<any[]>
  dropdown_programas: Observable<any[]>
  dropdown_ambito: Observable<any[]>
  dropdown_investigacion: Observable<any[]>
  dropdown_cursos: Observable<any[]>
  dropdown_normas: Observable<any[]>
  titles_historia: Observable<any[]>
  constructor(firestore: AngularFirestore) {

    this.contends_historia = firestore.collection('/Identidad/Historia/Contenidos-historia').valueChanges();
    this.dropdown_posgrados = firestore.collection('/Identidad/Historia/Dropdowns-historia/1000/Contenido-dropdownA').valueChanges();
    this.dropdown_carreras = firestore.collection('/Identidad/Historia/Dropdowns-historia/1001/Contenido-dropdown').valueChanges();
    this.dropdown_programas = firestore.collection('/Identidad/Historia/Dropdowns-historia/1002/Contenido-dropdownB').valueChanges();
    this.dropdown_ambito = firestore.collection('/Identidad/Historia/Dropdowns-historia/1003/Contenido-dropdownC').valueChanges();
    this.dropdown_investigacion = firestore.collection('/Identidad/Historia/Dropdowns-historia/1004/Contenido-dropdownD').valueChanges();
    this.dropdown_cursos = firestore.collection('/Identidad/Historia/Dropdowns-historia/1005/Contenido-dropdownF').valueChanges();
    this.dropdown_normas = firestore.collection('/Identidad/Historia/Dropdowns-historia/1006/Contenido-dropdownE').valueChanges();
    this.titles_historia = firestore.collection('/Identidad/Historia/Titulos-historia').valueChanges();

  }

  ngOnInit(): void {
  }
  onClick(){
    let full = document.getElementById('side');
    full.classList.toggle('active');
  }

  open(){
    let r = document.getElementById('right');
    r.classList.toggle('open');

    let l = document.getElementById('left');
    l.classList.toggle('open');
  }

}

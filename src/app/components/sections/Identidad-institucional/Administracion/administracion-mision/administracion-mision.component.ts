import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion-mision',
  templateUrl: './administracion-mision.component.html',
  styleUrls: ['./administracion-mision.component.css']
})
export class AdministracionMisionComponent implements OnInit {

  contends_mision: Observable<any[]>
  documents_mision: Observable<any[]>
  constructor(firestore: AngularFirestore) {

    this.contends_mision = firestore.collection('/Identidad/Mision/MisionDatos').valueChanges();
    this.documents_mision = firestore.collection('/Identidad/Mision/MisionDocumentos').valueChanges();
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

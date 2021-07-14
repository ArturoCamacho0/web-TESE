import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin-identidad-institucional',
  templateUrl: './admin-identidad-institucional.component.html',
  styleUrls: ['./admin-identidad-institucional.component.css']
})
export class AdminIdentidadInstitucionalComponent implements OnInit {

  titles: Observable<any[]>
  contends: Observable<any[]>
  imgs:Observable<any[]>


  constructor(firestore: AngularFirestore) {
    this.titles = firestore.collectionGroup('Titulos-logo').valueChanges();
    this.contends = firestore.collectionGroup('Contenidos-logo').valueChanges();
    this.imgs = firestore.collectionGroup('Imagenes-logo').valueChanges();
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

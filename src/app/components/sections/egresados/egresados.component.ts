import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-egresados',
  templateUrl: './egresados.component.html',
  styleUrls: ['./egresados.component.css']
})
export class EgresadosComponent implements OnInit {

  items: Observable<any[]>

  constructor(firestore: AngularFirestore) {

    this.items = firestore.collection('EgresadosYExalumnos').valueChanges();
  }

  ngOnInit(): void {
  }

}

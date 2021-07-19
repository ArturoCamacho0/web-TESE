import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-bioquimica',
  templateUrl: './cuerpo-bioquimica.component.html',
  styleUrls: ['./cuerpo-bioquimica.component.css']
})
export class CuerpoBioquimicaComponent implements OnInit {

  items: Observable<any[]>

  constructor(firestore: AngularFirestore) {
       this.items = firestore.collection('Carrera').valueChanges();
  }

  ngOnInit(): void {
  }

}

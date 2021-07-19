import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-mecatronica',
  templateUrl: './cuerpo-mecatronica.component.html',
  styleUrls: ['./cuerpo-mecatronica.component.css']
})
export class CuerpoMecatronicaComponent implements OnInit {

  items: Observable<any[]>

  constructor(firestore: AngularFirestore) {
       this.items = firestore.collection('Carrera').valueChanges();
  }

  ngOnInit(): void {
  }

}

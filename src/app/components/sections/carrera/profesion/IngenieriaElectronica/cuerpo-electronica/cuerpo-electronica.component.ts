import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo-electronica',
  templateUrl: './cuerpo-electronica.component.html',
  styleUrls: ['./cuerpo-electronica.component.css']
})
export class CuerpoElectronicaComponent implements OnInit {

  items: Observable<any[]>

  constructor(firestore: AngularFirestore) {
       this.items = firestore.collection('Carrera').valueChanges();
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

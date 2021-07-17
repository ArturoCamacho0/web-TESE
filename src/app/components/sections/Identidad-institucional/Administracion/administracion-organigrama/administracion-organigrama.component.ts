import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion-organigrama',
  templateUrl: './administracion-organigrama.component.html',
  styleUrls: ['./administracion-organigrama.component.css']
})
export class AdministracionOrganigramaComponent implements OnInit {



  contends_organigrama: Observable<any[]>

  constructor(firestore: AngularFirestore) {

    this.contends_organigrama = firestore.collection('/Identidad/Organigrama/DatosOrganigrama').valueChanges();
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

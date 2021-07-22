import { OrganigramaService } from './../../../../../services/firebase/Identidad-institucional/Organigrama/organigrama.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion-organigrama',
  templateUrl: './administracion-organigrama.component.html',
  styleUrls: ['./administracion-organigrama.component.css']
})
export class AdministracionOrganigramaComponent implements OnInit {



  organigrama : any [] = [];

  constructor(firestore: AngularFirestore,private _organigramaService: OrganigramaService) {

      }

  ngOnInit(): void {
    this.getOrganigrama()
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
  getOrganigrama(){
    this._organigramaService.getOrganigrama().subscribe(data =>{
      this.organigrama = [];
       data.forEach((element:any) => {

         this.organigrama.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.organigrama);
    });
  }

}

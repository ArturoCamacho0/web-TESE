import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

import { ReinscripcionService } from 'src/app/services/firebase/AdmisionYTramites/reinscripcion/reinscripcion.service';

@Component({
  selector: 'app-administracion-reinscripcion',
  templateUrl: './administracion-reinscripcion.component.html',
  styleUrls: ['./administracion-reinscripcion.component.css']
})
export class AdministracionReinscripcionComponent implements OnInit {
  content_reinscripcion: any [] = [];
  ingresarContend_R: FormGroup;
  submited_contenido_R = false;

  content_parrafo2: any [] = [];



  titles: any [] = [];

  constructor(firestore: AngularFirestore, private fbc: FormBuilder,
    private _ReinscripcionService: ReinscripcionService, private fbcar: FormBuilder,
    private fbpos: FormBuilder,private fbpro: FormBuilder,
    private fbamb: FormBuilder, private fbinv: FormBuilder,
    private fbcur: FormBuilder, private fbnor: FormBuilder) {

      this.ingresarContend_R = this.fbc.group({
        contenido_I:['', Validators.required],
        id_contenido: ['', Validators.required]
          })



     }

  ngOnInit(): void {
    this.getContenido_R()
    this.getContenido_P2()
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


getTitulos(){
  this._ReinscripcionService.getTitulos().subscribe(data =>{
    this.titles = [];
     data.forEach((element:any) => {

       this.titles.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
       })

     });
     console.log(this.titles);
  });
}

getContenido_R(){
  this._ReinscripcionService.getContenido_R().subscribe(data =>{
    this.content_reinscripcion = [];
     data.forEach((element:any) => {

       this.content_reinscripcion.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
       })

     });
     console.log(this.content_reinscripcion);
  });
}


agregarContenido_R(){
  this.submited_contenido_R = true;

  if(this.ingresarContend_R.invalid){
    return;
  }
  const contenido_I: any ={
    id_contenido: this.ingresarContend_R.value.id_contenido,
    contenido: this.ingresarContend_R.value.contenido_I
  }
  this._ReinscripcionService.agregarContenido_R(contenido_I).then(()=>{
    console.log('Contenido historia agregado con exito');
  }).catch(error=>{
    console.log(error);
  })
}


/* P2 */

getContenido_P2(){
  this._ReinscripcionService.getContenido_P2().subscribe(data =>{
    this.content_parrafo2 = [];
     data.forEach((element:any) => {

       this.content_parrafo2.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
       })

     });
     console.log(this.content_parrafo2);
  });
}


}

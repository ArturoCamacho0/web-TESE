import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {CompromisoService} from 'src/app/services/firebase/Normatividad/compromiso/compromiso.service';

@Component({
  selector: 'app-admin-compromiso',
  templateUrl: './admin-compromiso.component.html',
  styleUrls: ['./admin-compromiso.component.css']
})
export class AdminCompromisoComponent implements OnInit {


  content_inscripcion: any [] = [];
  content_inscripcion1:any [] = [];
  ingresarContend_I: FormGroup;
  submited_contenido_I = false;

  titles: any [] = [];



  constructor(firestore: AngularFirestore, private fbc: FormBuilder,
    private _CompromisoService: CompromisoService, private fbcar: FormBuilder,
    private fbpos: FormBuilder,private fbpro: FormBuilder,
    private fbamb: FormBuilder, private fbinv: FormBuilder,
    private fbcur: FormBuilder, private fbnor: FormBuilder) {

      this.ingresarContend_I = this.fbc.group({
        contenido_I:['', Validators.required],
        id_contenido: ['', Validators.required]
          })




     }

  ngOnInit(): void {

    this.getContenido_I()
    this.getTitulos()

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




  getContenido_I(){
    this._CompromisoService.getContenido_I().subscribe(data =>{
      this.content_inscripcion = [];
       data.forEach((element:any) => {

         this.content_inscripcion.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.content_inscripcion);
    });
  }

  getContenido_N(){
    this._CompromisoService.getContenido_N().subscribe(data =>{
      this.content_inscripcion1 = [];
       data.forEach((element:any) => {

         this.content_inscripcion1.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.content_inscripcion1);
    });
  }

  getTitulos(){
    this._CompromisoService.getTitulos().subscribe(data =>{
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


  agregarContenido_I(){
    this.submited_contenido_I = true;

    if(this.ingresarContend_I.invalid){
      return;
    }
    const contenido_I: any ={
      id_contenido: this.ingresarContend_I.value.id_contenido,
      contenido: this.ingresarContend_I.value.contenido_I
    }
    this._CompromisoService.agregarContenido_I(contenido_I).then(()=>{
      console.log('Contenido historia agregado con exito');
    }).catch(error=>{
      console.log(error);
    })
  }



  eliminarContenido_I(id: string){
    this._CompromisoService.eliminarContenido_I(id).then(()=>{
      console.log('CONTENIO Contenido ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }

}

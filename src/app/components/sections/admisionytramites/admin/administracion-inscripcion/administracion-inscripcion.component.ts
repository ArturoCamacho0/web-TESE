import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {InscripcionService} from 'src/app/services/firebase/AdmisionYTramites/Inscripcion/inscripcion.service';

@Component({
  selector: 'app-administracion-inscripcion',
  templateUrl: './administracion-inscripcion.component.html',
  styleUrls: ['./administracion-inscripcion.component.css']
})
export class AdministracionInscripcionComponent implements OnInit {

  content_precio: any [] = [];
  content_inscripcion: any [] = [];
  content_fecha: any [] = [];



  ingresarContend_I: FormGroup;
  ingresarContend_P: FormGroup;
  ingresarContend_F: FormGroup;

  submited_contenido_I = false;

  submited_contenido_P = false;


  submited_contenido_F = false;

  titles: any [] = [];



  constructor(firestore: AngularFirestore, private fbc: FormBuilder,
    private _inscripcionService: InscripcionService, private fbcar: FormBuilder,
    private fbpos: FormBuilder,private fbpro: FormBuilder,
    private fbamb: FormBuilder, private fbinv: FormBuilder,
    private fbcur: FormBuilder, private fbnor: FormBuilder) {

      this.ingresarContend_I = this.fbc.group({
        contenido_I:['', Validators.required],
        id_contenido: ['', Validators.required]
          })


          this.ingresarContend_P = this.fbc.group({
            contenidoprecio:['', Validators.required],
            id_precio: ['', Validators.required]
              })

              this.ingresarContend_F = this.fbc.group({
                contenidofecha:['', Validators.required],
                id_fecha: ['', Validators.required]
                  })



     }

  ngOnInit(): void {

    this.getContenido_I()
    this.getTitulos()
    this.getContenido_P()
    this.getContenido_F()
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
    this._inscripcionService.getContenido_I().subscribe(data =>{
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

  getTitulos(){
    this._inscripcionService.getTitulos().subscribe(data =>{
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
    this._inscripcionService.agregarContenido_I(contenido_I).then(()=>{
      console.log('Contenido historia agregado con exito');
    }).catch(error=>{
      console.log(error);
    })
  }



  eliminarContenido_I(id: string){
    this._inscripcionService.eliminarContenido_I(id).then(()=>{
      console.log('CONTENIO Contenido ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }




/* Precio */


getContenido_P(){
  this._inscripcionService.getContenido_P().subscribe(data =>{
    this.content_precio = [];
     data.forEach((element:any) => {

       this.content_precio.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
       })

     });
     console.log(this.content_precio);
  });
}


agregarContenido_P(){
  this.submited_contenido_P = true;

  if(this.ingresarContend_P.invalid){
    return;
  }
  const contenido_P: any ={
    id_precio: this.ingresarContend_P.value.id_precio,
    contenidoprecio: this.ingresarContend_P.value.contenidoprecio
  }
  this._inscripcionService.agregarContenido_P(contenido_P).then(()=>{
    console.log('Contenido Precio agregado con exito');
  }).catch(error=>{
    console.log(error);
  })
}

eliminarContenido_P(id: string){
  this._inscripcionService.eliminarContenido_P(id).then(()=>{
    console.log('CONTENIO Contenido ELIMINADO');
  }).catch(error =>{
    console.log(error
     )
  })
}

/* fechas */

getContenido_F(){
  this._inscripcionService.getContenido_F().subscribe(data =>{
    this.content_fecha = [];
     data.forEach((element:any) => {

       this.content_fecha.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
       })

     });
     console.log(this.content_fecha);
  });
}

agregarContenido_F(){
  this.submited_contenido_F = true;

  if(this.ingresarContend_F.invalid){
    return;
  }
  const contenido_F: any ={
    id_fecha: this.ingresarContend_F.value.id_fecha,
    contenidofecha: this.ingresarContend_F.value.contenidofecha
  }
  this._inscripcionService.agregarContenido_F(contenido_F).then(()=>{
    console.log('Contenido Precio agregado con exito');
  }).catch(error=>{
    console.log(error);
  })
}


eliminarContenido_F(id: string){
  this._inscripcionService.eliminarContenido_F(id).then(()=>{
    console.log('CONTENIO Contenido ELIMINADO');
  }).catch(error =>{
    console.log(error
     )
  })
}



}

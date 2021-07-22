import { InformeActividadesComponent } from './../../../normatividad/informe-actividades/informe-actividades.component';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HistoriaService } from 'src/app/services/firebase/Identidad-institucional/Historia/historia.service';


@Component({
  selector: 'app-administracion-historia',
  templateUrl: './administracion-historia.component.html',
  styleUrls: ['./administracion-historia.component.css']
})
export class AdministracionHistoriaComponent implements OnInit {


  contends_historia: any [] = [];
  ingresarContend_H: FormGroup;
  submited_contenido_H = false;


  dropdown_posgrados: any [] = [];
  ingresarPosgrados: FormGroup;
  submited_posgrado = false;


  dropdown_carreras: any [] = [];
  ingresarCarreras: FormGroup;
  submited_carreras = false;


  dropdown_programas: any [] = [];
  ingresarPrograma: FormGroup;
  submited_programa = false;


  dropdown_ambito: any [] = [];
  ingresarAmbito: FormGroup;
  submited_ambito = false;

  dropdown_investigacion: any [] = [];
  ingresarInvestigacion: FormGroup;
  submited_investigacion = false;

  dropdown_cursos: any [] = [];
  ingresarCurso: FormGroup;
  submited_curso = false;


  dropdown_normas: any [] = [];
  ingresarNorma: FormGroup;
  submited_norma = false;

  titles: any [] = [];


  constructor(firestore: AngularFirestore, private fbc: FormBuilder,
    private _historiaService: HistoriaService, private fbcar: FormBuilder,
    private fbpos: FormBuilder,private fbpro: FormBuilder,
    private fbamb: FormBuilder, private fbinv: FormBuilder,
    private fbcur: FormBuilder, private fbnor: FormBuilder) {

    this.ingresarContend_H = this.fbc.group({
      contenido_h:['', Validators.required],
      id_contenido: ['', Validators.required]
        })

    this.ingresarCarreras = this.fbcar.group({
      Dir_imagen:['', Validators.required],
      Nombre_Carrera:['', Validators.required]
    })

    this.ingresarPosgrados = this.fbpos.group({
      Dir_imagen:['', Validators.required],
      Nombre_Posgrado:['', Validators.required]
    })

    this.ingresarPrograma = this.fbpro.group({
      contenido_pro:['', Validators.required],
      id_programa:['', Validators.required]

    })

    this.ingresarAmbito = this.fbamb.group({
      id_ambito:['', Validators.required],
      contenido_amb:['', Validators.required]
    })

    this.ingresarInvestigacion = this.fbinv.group({
      id_programa:['', Validators.required],
      contenido_inv:['', Validators.required]
    })

    this.ingresarCurso = this.fbcur.group({
      id_curso:['', Validators.required],
      contenido_cur:['', Validators.required]
    })

    this.ingresarNorma = this.fbnor.group({
      id_norma:['', Validators.required],
      contenido_nor:['', Validators.required]
    })


  }

  ngOnInit(): void {
    this.getContenido_H()
    this.getCarrera()
    this.getPosgrado()
    this.getPrograma()
    this.getAmbito()
   this.getInvestigacion()
   this.getCurso()
   this. getNorma()
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

  agregarContenido_H(){
    this.submited_contenido_H = true;

    if(this.ingresarContend_H.invalid){
      return;
    }
    const contenido_h: any ={
      id_contenido: this.ingresarContend_H.value.id_contenido,
      contenido: this.ingresarContend_H.value.contenido_h
    }
    this._historiaService.agregarContenido_H(contenido_h).then(()=>{
      console.log('conteido hsitopria agregado con exito');
    }).catch(error=>{
      console.log(error);
    })
  }

  getContenido_H(){
    this._historiaService.getContenido_H().subscribe(data =>{
      this.contends_historia = [];
       data.forEach((element:any) => {

         this.contends_historia.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.contends_historia);
    });
  }

  eliminarContenido_H(id: string){
    this._historiaService.eliminarContenido_H(id).then(()=>{
      console.log('CONTENIO Contenido ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }

  agregarCarrera(){
    this.submited_carreras = true;
    if(this.ingresarCarreras.invalid){
      return;
    }
    const carrera: any = {
      Dir_subdrop: this.ingresarCarreras.value.Dir_imagen,
      Titulo_subdrop: this.ingresarCarreras.value.Nombre_Carrera
    }
    this._historiaService.agregarCarrera(carrera).then(()=>{
      console.log('Carrera agregada');
    }).catch(error=>{
      console.log(error);
    })
    console.log(carrera);
  }

  getCarrera(){
    this._historiaService.getCarrera().subscribe(data =>{
      this.dropdown_carreras = [];
       data.forEach((element:any) => {

         this.dropdown_carreras.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_carreras);
    });
  }

  eliminarCarrera(id: string){
    this._historiaService.eliminarCarrera(id).then(()=>{
      console.log('CONTENIO Carrera ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }

  agregarPosgrado(){
    this.submited_posgrado = true;
    if(this.ingresarPosgrados.invalid){
      return;
    }
    const posgrado: any = {
      Dir_subdrop: this.ingresarPosgrados.value.Dir_imagen,
      Titulo_subdrop: this.ingresarPosgrados.value.Nombre_Posgrado
    }
    this._historiaService.agregarPosgrado(posgrado).then(()=>{
      console.log('posgrado agregado');
    }).catch(error =>{
      console.log(error);
    })

  }

  getPosgrado(){
    this._historiaService.getPosgrado().subscribe(data =>{
      this.dropdown_posgrados = [];
       data.forEach((element:any) => {

         this.dropdown_posgrados.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_posgrados);
    });
  }

  eliminarPosgrado(id: string){
    this._historiaService.eliminarPosgrado(id).then(()=>{
      console.log('CONTENIO Posgrado ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }

  agregarPrograma(){
    this.submited_programa = true;
    if(this.ingresarPrograma.invalid){
      return;
    }
    const programa: any = {
      id_programa: this.ingresarPrograma.value.id_programa,
      contenido: this.ingresarPrograma.value.contenido_pro
    }
    this._historiaService.agregarPrograma(programa).then(()=>{
      console.log('Contenido Prgrama agregado');
    }).catch(error =>{
      console.log(error);
    })


  }

  getPrograma(){
    this._historiaService.getPrograma().subscribe(data =>{
      this.dropdown_programas = [];
       data.forEach((element:any) => {

         this.dropdown_programas.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_programas);
    });
  }

  eliminarPrograma(id: string){
    this._historiaService.eliminarPrograma(id).then(()=>{
      console.log('CONTENIO programa ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }

  agregarAmbito(){
    this.submited_ambito = true;
    if(this.ingresarAmbito.invalid){
      return;
    }
    const ambito: any = {
      id_ambito :this.ingresarAmbito.value.id_ambito,
      contenido: this.ingresarAmbito.value.contenido_amb
    }
    this._historiaService.agregarAmbito(ambito).then(()=>{
      console.log('Ambito agregado');
    }).catch(error =>{
      console.log(error);
    })
  }

  getAmbito(){
    this._historiaService.getAmbito().subscribe(data =>{
      this.dropdown_ambito = [];
       data.forEach((element:any) => {

         this.dropdown_ambito.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_ambito);
    });
  }

  eliminarAmbito(id: string){
    this._historiaService.eliminarAmbito(id).then(()=>{
      console.log('CONTENIO ambito ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }

  agregarInvestigacion(){
    this.submited_investigacion = true;
    if(this.ingresarInvestigacion.invalid){
      return;
    }
    const investigacion: any = {
      id_programa:this.ingresarInvestigacion.value.id_programa,
      contenido: this.ingresarInvestigacion.value.contenido_inv
    }
    this._historiaService.agregarInvestigacion(investigacion).then(()=>{
      console.log('Investigacion agregada');
    }).catch(error => {
      console.log(error);
    })
  }

  getInvestigacion(){
    this._historiaService.getInvestigacion().subscribe(data =>{
      this.dropdown_investigacion = [];
       data.forEach((element:any) => {

         this.dropdown_investigacion.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_investigacion);
    });
  }

  eliminarInvestigacion(id: string){
    this._historiaService.eliminarInvestigacion(id).then(()=>{
      console.log('CONTENIO investigacion ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }

  agregarCurso(){
    this.submited_curso = true;
    if(this.ingresarCurso.invalid){
      return;
    }
    const curso: any = {
      id_curso: this.ingresarCurso.value.id_curso,
      contenido: this.ingresarCurso.value.contenido_cur
    }
    this._historiaService.agregarCurso(curso).then(()=>{
      console.log('curso agregado');
    }).catch(error =>{
      console.log(error);
    })
  }

  getCurso(){
    this._historiaService.getCurso().subscribe(data =>{
      this.dropdown_cursos = [];
       data.forEach((element:any) => {

         this.dropdown_cursos.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_cursos);
    });
  }

  eliminarCurso(id: string){
    this._historiaService.eliminarCurso(id).then(()=>{
      console.log('CONTENIO cursoELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }

  agregarNorma(){
    this.submited_norma = true;
    if(this.ingresarNorma.invalid){
      return;
    }
    const norma: any = {
      id_norma:this.ingresarNorma.value.id_norma,
      contenido: this.ingresarNorma.value.contenido_nor
    }
    this._historiaService.agregarNorma(norma).then(()=>{
      console.log('Norma agregada');
    }).catch(error =>{
      console.log(error);
    })
  }

  getNorma(){
    this._historiaService.getNorma().subscribe(data =>{
      this.dropdown_normas = [];
       data.forEach((element:any) => {

         this.dropdown_normas.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_normas);
    });
  }

  eliminarNorma(id: string){
    this._historiaService.eliminarNorma(id).then(()=>{
      console.log('CONTENIO norma ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }

  getTitulos(){
    this._historiaService.getTitulos().subscribe(data =>{
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

}

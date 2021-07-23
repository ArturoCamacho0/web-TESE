import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MgestionService } from 'src/app/services/firebase/Egresado/MGestion/mgestion.service';

@Component({
  selector: 'app-control-gestion',
  templateUrl: './control-gestion.component.html',
  styleUrls: ['./control-gestion.component.css']
})
export class ControlGestionComponent implements OnInit {

  submitedConcepto = false;
  submitedObjetivo = false;
  submitedPerfil = false;
  submitedEstructura = false;
  submitedDuracion = false;
  submitedCarrera = false;

  Concepto: any[]=[];
  Objetivo: any[]=[];
  Perfil: any[]=[];
  Estructura: any[]=[];
  Duracion: any[]=[];
  Carrera: any[]=[];

  ingresarConcepto: FormGroup;
  ingresarObjetivo: FormGroup;
  ingresarPerfil: FormGroup;
  ingresarEstructura: FormGroup;
  ingresarDuracion: FormGroup;
  ingresarCarrera: FormGroup;

  constructor(private fbq: FormBuilder, private _MgestionService: MgestionService) {
    this.ingresarConcepto=this.fbq.group({
      ConceptoGestion:['', Validators.required]
    })
    this.ingresarObjetivo=this.fbq.group({
      ObjetivoGestion:['', Validators.required]
    })
    this.ingresarPerfil=this.fbq.group({
      PerfilGestion:['', Validators.required]
    })
    this.ingresarEstructura=this.fbq.group({
      EstructuraGestion:['', Validators.required]
    })
    this.ingresarDuracion=this.fbq.group({
      DuracionGestion:['', Validators.required]
    })
    this.ingresarCarrera=this.fbq.group({
      CarreraGestion:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getConcepto(),
    this.getObjetivo(),
    this.getPerfil(),
    this.getEstructura(),
    this.getDuracion(),
    this.getCarrera()
  }

  /*AGREGAR REGISTROS*/
  agregarConcepto(){
    this.submitedConcepto=true;
    if(this.ingresarConcepto.invalid){
      return;
    }
    const Concepto : any={
      ConceptosGestionDesc: this.ingresarConcepto.value.ConceptoGestion
    }
    this._MgestionService.crearConcepto(Concepto).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarObjetivo(){
    this.submitedObjetivo=true;
    if(this.ingresarObjetivo.invalid){
      return;
    }
    const Objetivo : any={
      ObjetivoGestionDesc: this.ingresarObjetivo.value.ObjetivoGestion
    }
    this._MgestionService.crearObjetivo(Objetivo).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarPerfil(){
    this.submitedPerfil=true;
    if(this.ingresarPerfil.invalid){
      return;
    }
    const Perfil : any={
      PerfilGestionOpc: this.ingresarPerfil.value.PerfilGestion
    }
    this._MgestionService.crearPerfil(Perfil).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarEstructura(){
    this.submitedEstructura=true;
    if(this.ingresarEstructura.invalid){
      return;
    }
    const Estructura : any={
      EstructuraGestionOpc: this.ingresarEstructura.value.EstructuraGestion
    }
    this._MgestionService.crearEstructura(Estructura).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarDuracion(){
    this.submitedDuracion=true;
    if(this.ingresarDuracion.invalid){
      return;
    }
    const Duracion : any={
      DuracionGestionDesc: this.ingresarDuracion.value.DuracionGestion
    }
    this._MgestionService.crearDuracion(Duracion).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarCarrera(){
    this.submitedCarrera=true;
    if(this.ingresarCarrera.invalid){
      return;
    }
    const Carrera : any={
      CarrerasGestionOpc: this.ingresarCarrera.value.CarreraGestion
    }
    this._MgestionService.crearCarrera(Carrera).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  /*EDITAR REGISTROS*/

   /*EVENTOS BOTON*/
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

  /*OBTENER DATOS*/
  getConcepto(){
    this._MgestionService.getConcepto().subscribe(data =>{
      this.Concepto=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Concepto.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Concepto);
    })
  }

  getObjetivo(){
    this._MgestionService.getObjetivo().subscribe(data =>{
      this.Objetivo=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Objetivo.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Objetivo);
    })
  }

  getPerfil(){
    this._MgestionService.getPerfil().subscribe(data =>{
      this.Perfil=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Perfil.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Perfil);
    })
  }

  getEstructura(){
    this._MgestionService.getEstructura().subscribe(data =>{
      this.Estructura=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Estructura.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Estructura);
    })
  }

  getDuracion(){
    this._MgestionService.getDuracion().subscribe(data =>{
      this.Duracion=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Duracion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Duracion);
    })
  }

  getCarrera(){
    this._MgestionService.getCarrera().subscribe(data =>{
      this.Carrera=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Carrera.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Carrera);
    })
  }

   /*ELIMINAR*/
   eliminaConcepto(id:string){
    this._MgestionService.eliminaConcepto(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaObjetivo(id:string){
    this._MgestionService.eliminaObjetivo(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaPerfil(id:string){
    this._MgestionService.eliminaPerfil(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaEstructura(id:string){
    this._MgestionService.eliminaEstructura(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaDuracion(id:string){
    this._MgestionService.eliminaDuracion(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaCarrera(id:string){
    this._MgestionService.eliminaCarrera(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

}


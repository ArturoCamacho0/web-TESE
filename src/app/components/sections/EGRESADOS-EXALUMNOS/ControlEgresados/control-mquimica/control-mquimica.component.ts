import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MquimicaService } from 'src/app/services/firebase/Egresado/MQuimica/Mquimica.service';


@Component({
  selector: 'app-control-mquimica',
  templateUrl: './control-mquimica.component.html',
  styleUrls: ['./control-mquimica.component.css']
})
export class ControlMquimicaComponent implements OnInit {

  submitedConcepto = false;
  submitedObjetivo = false;
  submitedPerfil = false;
  submitedMateriaB = false;
  submitedMateriaO = false;
  submitedArea = false;

  Concepto: any[]=[];
  Objetivo: any[]=[];
  Perfil: any[]=[];
  MateriaB: any[]=[];
  MateriaO: any[]=[];
  Area: any[]=[];

  ingresarConcepto: FormGroup;
  ingresarObjetivo: FormGroup;
  ingresarPerfil: FormGroup;
  ingresarMateriaB: FormGroup;
  ingresarMateriaO: FormGroup;
  ingresarArea: FormGroup;

  constructor(private fbq: FormBuilder, private _MquimicaService: MquimicaService) {
    this.ingresarConcepto=this.fbq.group({
      ConceptoQuimica:['', Validators.required]
    })
    this.ingresarObjetivo=this.fbq.group({
      ObjetivoQuimica:['', Validators.required]
    })
    this.ingresarPerfil=this.fbq.group({
      PerfilQuimica:['', Validators.required]
    })
    this.ingresarMateriaB=this.fbq.group({
      MateriaBQuimica:['', Validators.required]
    })
    this.ingresarMateriaO=this.fbq.group({
      MateriaOQuimica:['', Validators.required]
    })
    this.ingresarArea=this.fbq.group({
      AreaQuimica:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getConcepto(),
    this.getObjetivo(),
    this.getPerfil(),
    this.getMateriaB(),
    this.getMateriaO(),
    this.getArea()
  }

  /*AGREGAR REGISTROS*/
  agregarConcepto(){
    this.submitedConcepto=true;
    if(this.ingresarConcepto.invalid){
      return;
    }
    const Concepto : any={
      ConceptosMQuimicaDesc: this.ingresarConcepto.value.ConceptoQuimica
    }
    this._MquimicaService.crearConcepto(Concepto).then(()=>{
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
      ObjetivoMquimicaDesc: this.ingresarObjetivo.value.ObjetivoQuimica
    }
    this._MquimicaService.crearObjetivo(Objetivo).then(()=>{
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
      PerfilMquimicaOpc: this.ingresarPerfil.value.PerfilQuimica
    }
    this._MquimicaService.crearPerfil(Perfil).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarMateriaB(){
    this.submitedMateriaB=true;
    if(this.ingresarMateriaB.invalid){
      return;
    }
    const MateriaB : any={
      QuimicaMateriaBasica: this.ingresarMateriaB.value.MateriaBQuimica
    }
    this._MquimicaService.crearMateriaB(MateriaB).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarMateriaO(){
    this.submitedMateriaO=true;
    if(this.ingresarMateriaO.invalid){
      return;
    }
    const MateriaO : any={
      QuimicaMateriaOptativa: this.ingresarMateriaO.value.MateriaOQuimica
    }
    this._MquimicaService.crearMateriaO(MateriaO).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarArea(){
    this.submitedArea=true;
    if(this.ingresarArea.invalid){
      return;
    }
    const Area : any={
      AreaMquimicaOpc: this.ingresarArea.value.AreaQuimica
    }
    this._MquimicaService.crearArea(Area).then(()=>{
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
    this._MquimicaService.getConcepto().subscribe(data =>{
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
    this._MquimicaService.getObjetivo().subscribe(data =>{
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
    this._MquimicaService.getPerfil().subscribe(data =>{
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

  getMateriaB(){
    this._MquimicaService.getMateriaB().subscribe(data =>{
      this.MateriaB=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.MateriaB.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.MateriaB);
    })
  }

  getMateriaO(){
    this._MquimicaService.getMateriaO().subscribe(data =>{
      this.MateriaO=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.MateriaO.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.MateriaO);
    })
  }

  getArea(){
    this._MquimicaService.getArea().subscribe(data =>{
      this.Area=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Area.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Area);
    })
  }

   /*ELIMINAR*/
   eliminaConcepto(id:string){
    this._MquimicaService.eliminaConcepto(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaObjetivo(id:string){
    this._MquimicaService.eliminaObjetivo(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaPerfil(id:string){
    this._MquimicaService.eliminaPerfil(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaMateriaB(id:string){
    this._MquimicaService.eliminaMateriaB(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaMateriaO(id:string){
    this._MquimicaService.eliminaMateriaO(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaArea(id:string){
    this._MquimicaService.eliminaArea(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }



}


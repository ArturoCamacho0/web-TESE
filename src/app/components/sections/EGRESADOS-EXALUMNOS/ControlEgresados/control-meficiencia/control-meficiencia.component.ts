import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MeficienciaService } from './../../../../../services/firebase/Egresado/MEficiencia/meficiencia.service';

@Component({
  selector: 'app-control-meficiencia',
  templateUrl: './control-meficiencia.component.html',
  styleUrls: ['./control-meficiencia.component.css']
})
export class ControlMeficienciaComponent implements OnInit {

  submitedConcepto = false;
  submitedObjetivo = false;
  submitedPerfil = false;
  submitedMateriaB = false;
  submitedMateriaO = false;
  submitedCampo = false;

  Concepto: any[]=[];
  Objetivo: any[]=[];
  Perfil: any[]=[];
  MateriaB: any[]=[];
  MateriaO: any[]=[];
  Campo: any[]=[];

  ingresarConcepto: FormGroup;
  ingresarObjetivo: FormGroup;
  ingresarPerfil: FormGroup;
  ingresarMateriaB: FormGroup;
  ingresarMateriaO: FormGroup;
  ingresarCampo: FormGroup;

  constructor(private fbq: FormBuilder, private _MeficienciaService: MeficienciaService) {
    this.ingresarConcepto=this.fbq.group({
      ConceptoEficiencia:['', Validators.required]
    })
    this.ingresarObjetivo=this.fbq.group({
      ObjetivoEficiencia:['', Validators.required]
    })
    this.ingresarPerfil=this.fbq.group({
      PerfilEficiencia:['', Validators.required]
    })
    this.ingresarMateriaB=this.fbq.group({
      MateriaBEficiencia:['', Validators.required]
    })
    this.ingresarMateriaO=this.fbq.group({
      MateriaOEficiencia:['', Validators.required]
    })
    this.ingresarCampo=this.fbq.group({
      CampoEficiencia:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getConcepto(),
    this.getObjetivo(),
    this.getPerfil(),
    this.getMateriaB(),
    this.getMateriaO(),
    this.getCampo()
  }

  /*AGREGAR REGISTROS*/
  agregarConcepto(){
    this.submitedConcepto=true;
    if(this.ingresarConcepto.invalid){
      return;
    }
    const Concepto : any={
      ConceptosMeficienciaDesc: this.ingresarConcepto.value.ConceptoEficiencia
    }
    this._MeficienciaService.crearConcepto(Concepto).then(()=>{
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
      ObjetivoMeficienciaDesc: this.ingresarObjetivo.value.ObjetivoEficiencia
    }
    this._MeficienciaService.crearObjetivo(Objetivo).then(()=>{
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
      PerfilMeficienciaDesc: this.ingresarPerfil.value.PerfilEficiencia
    }
    this._MeficienciaService.crearPerfil(Perfil).then(()=>{
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
      EficienciaMateriaBasica: this.ingresarMateriaB.value.MateriaBEficiencia
    }
    this._MeficienciaService.crearMateriaB(MateriaB).then(()=>{
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
      EficienciaMateriaOptativa: this.ingresarMateriaO.value.MateriaOEficiencia
    }
    this._MeficienciaService.crearMateriaO(MateriaO).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarCampo(){
    this.submitedCampo=true;
    if(this.ingresarCampo.invalid){
      return;
    }
    const Campo : any={
      CampoMeficienciaOpc: this.ingresarCampo.value.CampoEficiencia
    }
    this._MeficienciaService.crearCampo(Campo).then(()=>{
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
    this._MeficienciaService.getConcepto().subscribe(data =>{
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
    this._MeficienciaService.getObjetivo().subscribe(data =>{
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
    this._MeficienciaService.getPerfil().subscribe(data =>{
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
    this._MeficienciaService.getMateriaB().subscribe(data =>{
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
    this._MeficienciaService.getMateriaO().subscribe(data =>{
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

  getCampo(){
    this._MeficienciaService.getCampo().subscribe(data =>{
      this.Campo=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Campo.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Campo);
    })
  }

   /*ELIMINAR*/
   eliminaConcepto(id:string){
    this._MeficienciaService.eliminaConcepto(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaObjetivo(id:string){
    this._MeficienciaService.eliminaObjetivo(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaPerfil(id:string){
    this._MeficienciaService.eliminaPerfil(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaMateriaB(id:string){
    this._MeficienciaService.eliminaMateriaB(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaMateriaO(id:string){
    this._MeficienciaService.eliminaMateriaO(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaCampo(id:string){
    this._MeficienciaService.eliminaCampo(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }



}

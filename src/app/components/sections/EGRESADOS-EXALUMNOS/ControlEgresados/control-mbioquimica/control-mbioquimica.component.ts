import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MbioquimicaService } from 'src/app/services/firebase/Egresado/MBioquimica/mbioquimica.service';

@Component({
  selector: 'app-control-mbioquimica',
  templateUrl: './control-mbioquimica.component.html',
  styleUrls: ['./control-mbioquimica.component.css']
})
export class ControlMbioquimicaComponent implements OnInit {

  
  submitedConcepto = false;
  submitedObjetivo = false;
  submitedCampo = false;
  submitedPerfil = false;
  submitedMateriaB = false;
  submitedMateriaO = false;
  submitedArea = false;

  Concepto: any[]=[];
  Objetivo: any[]=[];
  Campo: any[]=[];
  Perfil: any[]=[];
  MateriaB: any[]=[];
  MateriaO: any[]=[];
  Area: any[]=[];

  ingresarConcepto: FormGroup;
  ingresarObjetivo: FormGroup;
  ingresarCampo: FormGroup;
  ingresarPerfil: FormGroup;
  ingresarMateriaB: FormGroup;
  ingresarMateriaO: FormGroup;
  ingresarArea: FormGroup;

  constructor(private fbq: FormBuilder, private _MbioquimicaService: MbioquimicaService) {
    this.ingresarConcepto=this.fbq.group({
      ConceptoBioquimica:['', Validators.required]
    })
    this.ingresarObjetivo=this.fbq.group({
      ObjetivoBioquimica:['', Validators.required]
    })
    this.ingresarCampo=this.fbq.group({
      CampoBioquimica:['', Validators.required]
    })
    this.ingresarPerfil=this.fbq.group({
      PerfilBioquimica:['', Validators.required]
    })
    this.ingresarMateriaB=this.fbq.group({
      MateriaBBioquimica:['', Validators.required]
    })
    this.ingresarMateriaO=this.fbq.group({
      MateriaOBioquimica:['', Validators.required]
    })
    this.ingresarArea=this.fbq.group({
      AreaBioquimica:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getConcepto(),
    this.getObjetivo(),
    this.getCampo(),
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
      ConceptosMbioquimicaDesc: this.ingresarConcepto.value.ConceptoBioquimica
    }
    this._MbioquimicaService.crearConcepto(Concepto).then(()=>{
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
      ObjetivoMbioquimicaDesc: this.ingresarObjetivo.value.ObjetivoBioquimica
    }
    this._MbioquimicaService.crearObjetivo(Objetivo).then(()=>{
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
      CampoMbioquimicaDesc: this.ingresarCampo.value.CampoBioquimica
    }
    this._MbioquimicaService.crearCampo(Campo).then(()=>{
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
      PerfilMbioquimicaOpc: this.ingresarPerfil.value.PerfilBioquimica
    }
    this._MbioquimicaService.crearPerfil(Perfil).then(()=>{
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
      BioquimicaMateriaBasica: this.ingresarMateriaB.value.MateriaBBioquimica
    }
    this._MbioquimicaService.crearMateriaB(MateriaB).then(()=>{
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
      BioquimicaMateriaOptativa: this.ingresarMateriaO.value.MateriaOBioquimica
    }
    this._MbioquimicaService.crearMateriaO(MateriaO).then(()=>{
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
      AreaMbioquimicaOpc: this.ingresarArea.value.AreaBioquimica
    }
    this._MbioquimicaService.crearArea(Area).then(()=>{
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
    this._MbioquimicaService.getConcepto().subscribe(data =>{
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
    this._MbioquimicaService.getObjetivo().subscribe(data =>{
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

  getCampo(){
    this._MbioquimicaService.getCampo().subscribe(data =>{
      this.Campo=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Campo.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Objetivo);
    })
  }

  getPerfil(){
    this._MbioquimicaService.getPerfil().subscribe(data =>{
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
    this._MbioquimicaService.getMateriaB().subscribe(data =>{
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
    this._MbioquimicaService.getMateriaO().subscribe(data =>{
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
    this._MbioquimicaService.getArea().subscribe(data =>{
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
    this._MbioquimicaService.eliminaConcepto(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaObjetivo(id:string){
    this._MbioquimicaService.eliminaObjetivo(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaCampo(id:string){
    this._MbioquimicaService.eliminaCampo(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaPerfil(id:string){
    this._MbioquimicaService.eliminaPerfil(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaMateriaB(id:string){
    this._MbioquimicaService.eliminaMateriaB(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaMateriaO(id:string){
    this._MbioquimicaService.eliminaMateriaO(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaArea(id:string){
    this._MbioquimicaService.eliminaArea(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  

}
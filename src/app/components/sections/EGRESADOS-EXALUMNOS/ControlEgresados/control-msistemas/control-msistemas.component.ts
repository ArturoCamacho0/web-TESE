import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MsistemasService } from 'src/app/services/firebase/Egresado/MSistemas/msistemas.service';

@Component({
  selector: 'app-control-msistemas',
  templateUrl: './control-msistemas.component.html',
  styleUrls: ['./control-msistemas.component.css']
})
export class ControlMsistemasComponent implements OnInit {

  submitedConcepto = false;
  submitedDirigido = false;
  submitedPerfilI = false;
  submitedPerfilE = false;
  submitedRequisito = false;
  submitedDocumento = false;
  submitedMision = false;
  submitedVision = false;
  submitedLinea = false;

  Concepto: any[]=[];
  Dirigido: any[]=[];
  PerfilI: any[]=[];
  PerfilE: any[]=[];
  Requisito: any[]=[];
  Documento: any[]=[];
  Mision: any[]=[];
  Vision: any[]=[];
  Linea: any[]=[];

  ingresarConcepto: FormGroup;
  ingresarDirigido: FormGroup;
  ingresarPerfilI: FormGroup;
  ingresarPerfilE: FormGroup;
  ingresarRequisito: FormGroup;
  ingresarDocumento: FormGroup;
  ingresarMision: FormGroup;
  ingresarVision: FormGroup;
  ingresarLinea: FormGroup;

  constructor(private fbq: FormBuilder, private _MsistemasService: MsistemasService) {
    this.ingresarConcepto=this.fbq.group({
      ConceptoSistemas:['', Validators.required]
    })
    this.ingresarDirigido=this.fbq.group({
      DirigidoSistemas:['', Validators.required]
    })
    this.ingresarPerfilI=this.fbq.group({
      PerfilISistemas:['', Validators.required]
    })
    this.ingresarPerfilE=this.fbq.group({
      PerfilESistemas:['', Validators.required]
    })
    this.ingresarRequisito=this.fbq.group({
      RequisitoSistemas:['', Validators.required]
    })
    this.ingresarDocumento=this.fbq.group({
      DocumentoSistemas:['', Validators.required]
    })
    this.ingresarMision=this.fbq.group({
      MisionSistemas:['', Validators.required]
    })
    this.ingresarVision=this.fbq.group({
      VisionSistemas:['', Validators.required]
    })
    this.ingresarLinea=this.fbq.group({
      LineaSistemas:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getConcepto(),
    this.getDirigido(),
    this.getPerfilI(),
    this.getPerfilE(),
    this.getRequisito(),
    this.getDocumento(),
    this.getMision(),
    this.getVision(),
    this.getLinea()
  }

  /*AGREGAR REGISTROS*/
  agregarConcepto(){
    this.submitedConcepto=true;
    if(this.ingresarConcepto.invalid){
      return;
    }
    const Concepto : any={
      ConceptosMsistemasDesc: this.ingresarConcepto.value.ConceptoSistemas
    }
    this._MsistemasService.crearConcepto(Concepto).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarDirigido(){
    this.submitedDirigido=true;
    if(this.ingresarDirigido.invalid){
      return;
    }
    const Dirigido : any={
      DirigidoMSistemasDesc: this.ingresarDirigido.value.DirigidoSistemas
    }
    this._MsistemasService.crearDirigido(Dirigido).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarPerfilI(){
    this.submitedPerfilI=true;
    if(this.ingresarPerfilI.invalid){
      return;
    }
    const PerfilI : any={
      PerfilIMsistemasOpc: this.ingresarPerfilI.value.PerfilISistemas
    }
    this._MsistemasService.crearPerfilI(PerfilI).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarPerfilE(){
    this.submitedPerfilE=true;
    if(this.ingresarPerfilE.invalid){
      return;
    }
    const PerfilE : any={
      PerfilEMsistemasDesc: this.ingresarPerfilE.value.PerfilESistemas
    }
    this._MsistemasService.crearPerfilE(PerfilE).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarRequisito(){
    this.submitedRequisito=true;
    if(this.ingresarRequisito.invalid){
      return;
    }
    const Requisito : any={
      RequisitosMsistemasOpc: this.ingresarRequisito.value.RequisitoSistemas
    }
    this._MsistemasService.crearRequisito(Requisito).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarDocumento(){
    this.submitedDocumento=true;
    if(this.ingresarDocumento.invalid){
      return;
    }
    const Documento : any={
      DocumentosMsistemasopc: this.ingresarDocumento.value.DocumentoSistemas
    }
    this._MsistemasService.crearDocumento(Documento).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarMision(){
    this.submitedMision=true;
    if(this.ingresarMision.invalid){
      return;
    }
    const Mision : any={
      MisionMsistemasDesc: this.ingresarMision.value.MisionSistemas
    }
    this._MsistemasService.crearMision(Mision).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarVision(){
    this.submitedVision=true;
    if(this.ingresarVision.invalid){
      return;
    }
    const Vision : any={
      VisionMsistemasDesc: this.ingresarVision.value.VisionSistemas
    }
    this._MsistemasService.crearVision(Vision).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarLinea(){
    this.submitedLinea=true;
    if(this.ingresarLinea.invalid){
      return;
    }
    const Linea : any={
      LineasMsistemasDesc: this.ingresarLinea.value.LineaSistemas
    }
    this._MsistemasService.crearLinea(Linea).then(()=>{
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
    this._MsistemasService.getConcepto().subscribe(data =>{
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

  getDirigido(){
    this._MsistemasService.getDirigido().subscribe(data =>{
      this.Dirigido=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Dirigido.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Dirigido);
    })
  }

  getPerfilI(){
    this._MsistemasService.getPerfilI().subscribe(data =>{
      this.PerfilI=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.PerfilI.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.PerfilI);
    })
  }

  getPerfilE(){
    this._MsistemasService.getPerfilE().subscribe(data =>{
      this.PerfilE=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.PerfilE.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.PerfilE);
    })
  }

  getRequisito(){
    this._MsistemasService.getRequisito().subscribe(data =>{
      this.Requisito=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Requisito.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Requisito);
    })
  }

  getDocumento(){
    this._MsistemasService.getDocumento().subscribe(data =>{
      this.Documento=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Documento.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Documento);
    })
  }

  getMision(){
    this._MsistemasService.getMision().subscribe(data =>{
      this.Mision=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Mision.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Mision);
    })
  }

  getVision(){
    this._MsistemasService.getVision().subscribe(data =>{
      this.Vision=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Vision.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Vision);
    })
  }

  getLinea(){
    this._MsistemasService.getLinea().subscribe(data =>{
      this.Linea=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Linea.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Linea);
    })
  }

   /*ELIMINAR*/
   eliminaConcepto(id:string){
    this._MsistemasService.eliminaConcepto(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaDirigido(id:string){
    this._MsistemasService.eliminaDirigido(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaPerfilI(id:string){
    this._MsistemasService.eliminaPerfilI(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaPerfilE(id:string){
    this._MsistemasService.eliminaPerfilE(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaRequisito(id:string){
    this._MsistemasService.eliminaRequisito(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaDocumento(id:string){
    this._MsistemasService.eliminaDocumento(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaMision(id:string){
    this._MsistemasService.eliminaMision(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaVision(id:string){
    this._MsistemasService.eliminaVision(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaLinea(id:string){
    this._MsistemasService.eliminaLinea(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  }





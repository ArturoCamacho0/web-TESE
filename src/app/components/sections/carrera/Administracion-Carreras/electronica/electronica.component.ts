import { ElectronicaService } from './../../../../../services/firebase/Carrera/Electronica/electronica.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-electronica',
  templateUrl: './electronica.component.html',
  styleUrls: ['./electronica.component.css']
})

export class ElectronicaComponent implements OnInit {
  Objetivo: any[]=[];
  Perfil: any[]=[];
  Egreso: any[]=[];
  Doc: any[]=[];
  Funcion: any[]=[];
  Vision: any[]=[];
  ingresarObjetivo: FormGroup;
  ingresarPerfil: FormGroup;
  ingresarEgreso: FormGroup;
  ingresarDoc: FormGroup;
  ingresarFuncion: FormGroup;
  ingresarVision: FormGroup;
  submitedObjetivo = false;
  submitedPerfil = false;
  submitedEgreso = false;
  submitedDoc = false;
  submitedFuncion = false;
  submitedVision = false;

  constructor(private fbm: FormBuilder, private _ElectronicaService: ElectronicaService) {
    this.ingresarObjetivo = this.fbm.group({
      titulo_Objetivo:['',Validators.required]
    })
    this.ingresarPerfil = this.fbm.group({
      titulo_Perfil:['',Validators.required]
    })
    this.ingresarEgreso = this.fbm.group({
      titulo_Egreso:['',Validators.required]
    })
    this.ingresarDoc = this.fbm.group({
      id_Doc:['',Validators.required],
      contenido_Doc:['',Validators.required],
      titulo_Doc:['',Validators.required]
    })
    this.ingresarFuncion = this.fbm.group({
      titulo_Funcion:['',Validators.required]
    })
    this.ingresarVision = this.fbm.group({
      titulo_vision:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.getObjetivo()
    this.getPerfil()
    this.getEgreso()
    this.getDoc()
    this.getFuncion()
    this.getVision()
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
  agregarObjetivo(){
    this.submitedObjetivo=true;
    if(this.ingresarObjetivo.invalid){
      return;
    }
    const Objetivo :any={
      contenido:this.ingresarObjetivo.value.titulo_Objetivo,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._ElectronicaService.crearObjetivo(Objetivo).then(()=>{
      console.log('Objetivo registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarPerfil(){
    this.submitedPerfil=true;
    if(this.ingresarPerfil.invalid){
      return;
    }
    const Perfil :any={
      contenido:this.ingresarPerfil.value.titulo_Perfil,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._ElectronicaService.crearPerfil(Perfil).then(()=>{
      console.log('Objetivo registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarEgreso(){
    this.submitedEgreso=true;
    if(this.ingresarEgreso.invalid){
      return;
    }
    const Egreso :any={
      contenido:this.ingresarEgreso.value.titulo_Egreso,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._ElectronicaService.crearEgreso(Egreso).then(()=>{
      console.log('Egreso registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarDoc(){
    this.submitedDoc=true;
    if(this.ingresarDoc.invalid){
      return;
    }
    const Doc :any={
      id_Doc:this.ingresarDoc.value.id_Doc,
      titulo:this.ingresarDoc.value.titulo_Doc,
      contenido:this.ingresarDoc.value.contenido_Doc,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._ElectronicaService.crearDoc(Doc).then(()=>{
      console.log('Documento registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarFuncion(){
    this.submitedFuncion=true;
    if(this.ingresarFuncion.invalid){
      return;
    }
    const Funcion:any={
      contenido:this.ingresarFuncion.value.titulo_Funcion,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._ElectronicaService.crearFuncion(Funcion).then(()=>{
      console.log('Funcion registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarVision(){
    this.submitedVision=true;
    if(this.ingresarVision.invalid){
      return;
    }
    const vision :any={
      contenido:this.ingresarVision.value.titulo_vision,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._ElectronicaService.crearVision(vision).then(()=>{
      console.log('Vision registrada con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }




  getObjetivo(){
    this._ElectronicaService.getObjetivo().subscribe(data =>{
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
    this._ElectronicaService.getPerfil().subscribe(data =>{
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
  getEgreso(){
    this._ElectronicaService.getEgreso().subscribe(data =>{
      this.Egreso=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Egreso.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Egreso);
    })
  }
  getDoc(){
    this._ElectronicaService.getDoc().subscribe(data =>{
      this.Doc=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Doc.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Doc);
    })
  }
  getFuncion(){
    this._ElectronicaService.getFuncion().subscribe(data =>{
      this.Funcion=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.Campo.data());*/
        this.Funcion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Funcion);
    })
  }
  getVision(){
    this._ElectronicaService.getVision().subscribe(data =>{
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



  eliminaObjetivo(id:string){
    this._ElectronicaService.eliminaObjetivo(id).then(()=>{
      console.log('Objetivo eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaPerfil(id:string){
    this._ElectronicaService.eliminaPerfil(id).then(()=>{
      console.log('Objetivo General eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaEgreso(id:string){
    this._ElectronicaService.eliminaEgreso(id).then(()=>{
      console.log('Egreso eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaDoc(id:string){
    this._ElectronicaService.eliminaDoc(id).then(()=>{
      console.log('Documento eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaFuncion(id:string){
    this._ElectronicaService.eliminaFuncion(id).then(()=>{
      console.log('Documento eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaVision(id:string){
    this._ElectronicaService.eliminaVision(id).then(()=>{
      console.log('Vision eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }


}

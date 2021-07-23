import { AeronauticaService } from './../../../../../services/firebase/Carrera/Aeronautica/aeronautica.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-aeronautica',
  templateUrl: './aeronautica.component.html',
  styleUrls: ['./aeronautica.component.css']
})
export class AeronauticaComponent implements OnInit {
  Objetivo: any[]=[];
  Egreso: any[]=[];
  Ingreso: any[]=[];
  Campo: any[]=[];
  Doc: any[]=[];
  ingresarObjetivo: FormGroup;
  ingresarEgreso: FormGroup;
  ingresarIngreso: FormGroup;
  ingresarCampo: FormGroup;
  ingresarDoc: FormGroup;
  submitedObjetivo = false;
  submitedEgreso = false;
  submitedIngreso = false;
  submitedCampo = false;
  submitedDoc = false;

  constructor(private fbm: FormBuilder, private _AeronauticaService: AeronauticaService) {
    this.ingresarObjetivo = this.fbm.group({
      titulo_Objetivo:['',Validators.required]
    })
    this.ingresarEgreso = this.fbm.group({
      titulo_Egreso:['',Validators.required]
    })
    this.ingresarIngreso = this.fbm.group({
      titulo_Ingreso:['',Validators.required]
    })
    this.ingresarCampo = this.fbm.group({
      titulo_Campo:['',Validators.required]
    })
    this.ingresarDoc = this.fbm.group({
      Id_Doc:['',Validators.required],
      contenido_Doc:['',Validators.required],
      titulo_Doc:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.getObjetivo()
    this.getEgreso()
    this.getIngreso()
    this.getCampo()
    this.getDoc()
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
    this._AeronauticaService.crearObjetivo(Objetivo).then(()=>{
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
    this._AeronauticaService.crearEgreso(Egreso).then(()=>{
      console.log('Egreso registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarIngreso(){
    this.submitedIngreso=true;
    if(this.ingresarIngreso.invalid){
      return;
    }
    const Ingreso :any={
      contenido:this.ingresarIngreso.value.titulo_Ingreso,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._AeronauticaService.crearIngreso(Ingreso).then(()=>{
      console.log('Ingreso registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarCampo(){
    this.submitedCampo=true;
    if(this.ingresarCampo.invalid){
      return;
    }
    const Campo :any={
      contenido:this.ingresarCampo.value.titulo_Campo,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._AeronauticaService.crearCampo(Campo).then(()=>{
      console.log('Campo registrado con exito!');
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
      id_doc:this.ingresarDoc.value.Id_Doc,
      titulo:this.ingresarDoc.value.titulo_Doc,
      contenido:this.ingresarDoc.value.contenido_Doc,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._AeronauticaService.crearDoc(Doc).then(()=>{
      console.log('Documento registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }




  getObjetivo(){
    this._AeronauticaService.getObjetivo().subscribe(data =>{
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
  getEgreso(){
    this._AeronauticaService.getEgreso().subscribe(data =>{
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
  getIngreso(){
    this._AeronauticaService.getIngreso().subscribe(data =>{
      this.Ingreso=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Ingreso.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Ingreso);
    })
  }
  getCampo(){
    this._AeronauticaService.getCampo().subscribe(data =>{
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
  getDoc(){
    this._AeronauticaService.getDoc().subscribe(data =>{
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



  eliminaObjetivo(id:string){
    this._AeronauticaService.eliminaObjetivo(id).then(()=>{
      console.log('Objetivo eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaEgreso(id:string){
    this._AeronauticaService.eliminaEgreso(id).then(()=>{
      console.log('Egreso eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaIngreso(id:string){
    this._AeronauticaService.eliminaIngreso(id).then(()=>{
      console.log('Ingreso eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaCampo(id:string){
    this._AeronauticaService.eliminaCampo(id).then(()=>{
      console.log('Campo eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaDoc(id:string){
    this._AeronauticaService.eliminaDoc(id).then(()=>{
      console.log('Documento eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }


}

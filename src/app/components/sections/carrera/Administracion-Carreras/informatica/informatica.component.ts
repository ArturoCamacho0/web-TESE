import { InformaticaService } from './../../../../../services/firebase/Carrera/Informatica/informatica.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})

export class InformaticaComponent implements OnInit {
  Objetivo: any[]=[];
  Egreso: any[]=[];
  Doc: any[]=[];
  Campo: any[]=[];
  ingresarObjetivo: FormGroup;
  ingresarEgreso: FormGroup;
  ingresarDoc: FormGroup;
  ingresarCampo: FormGroup;
  submitedObjetivo = false;
  submitedEgreso = false;
  submitedDoc = false;
  submitedCampo = false;

  constructor(private fbm: FormBuilder, private _InformaticaService: InformaticaService) {
    this.ingresarObjetivo = this.fbm.group({
      titulo_Objetivo:['',Validators.required]
    })
    this.ingresarEgreso = this.fbm.group({
      titulo_Egreso:['',Validators.required]
    })
    this.ingresarDoc = this.fbm.group({
      id_Doc:['',Validators.required],
      contenido_Doc:['',Validators.required],
      titulo_Doc:['',Validators.required]
    })
    this.ingresarCampo = this.fbm.group({
      titulo_Campo:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.getObjetivo()
    this.getEgreso()
    this.getDoc()
    this.getCampo()
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
    this._InformaticaService.crearObjetivo(Objetivo).then(()=>{
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
    this._InformaticaService.crearEgreso(Egreso).then(()=>{
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
    this._InformaticaService.crearDoc(Doc).then(()=>{
      console.log('Documento registrado con exito!');
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
    this._InformaticaService.crearCampo(Campo).then(()=>{
      console.log('Campo Laboral registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }




  getObjetivo(){
    this._InformaticaService.getObjetivo().subscribe(data =>{
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
    this._InformaticaService.getEgreso().subscribe(data =>{
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
    this._InformaticaService.getDoc().subscribe(data =>{
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
  getCampo(){
    this._InformaticaService.getCampo().subscribe(data =>{
      this.Campo=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.Campo.data());*/
        this.Campo.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Campo);
    })
  }



  eliminaObjetivo(id:string){
    this._InformaticaService.eliminaObjetivo(id).then(()=>{
      console.log('Objetivo eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaEgreso(id:string){
    this._InformaticaService.eliminaEgreso(id).then(()=>{
      console.log('Egreso eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaDoc(id:string){
    this._InformaticaService.eliminaDoc(id).then(()=>{
      console.log('Documento eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaCampo(id:string){
    this._InformaticaService.eliminaCampo(id).then(()=>{
      console.log('Documento eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }


}

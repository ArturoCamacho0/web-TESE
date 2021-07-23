import { GestionService } from './../../../../../services/firebase/Carrera/Gestion/gestion.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-empresarial',
  templateUrl: './gestion-empresarial.component.html',
  styleUrls: ['./gestion-empresarial.component.css']
})

export class GestionEmpresarialComponent implements OnInit {
  Objetivo: any[]=[];
  Egreso: any[]=[];
  Doc: any[]=[];
  ingresarObjetivo: FormGroup;
  ingresarEgreso: FormGroup;
  ingresarDoc: FormGroup;
  submitedObjetivo = false;
  submitedEgreso = false;
  submitedDoc = false;

  constructor(private fbm: FormBuilder, private _GestionService: GestionService) {
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
  }

  ngOnInit(): void {
    this.getObjetivo()
    this.getEgreso()
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
    this._GestionService.crearObjetivo(Objetivo).then(()=>{
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
      campo:this.ingresarEgreso.value.titulo_Egreso,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._GestionService.crearEgreso(Egreso).then(()=>{
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
    this._GestionService.crearDoc(Doc).then(()=>{
      console.log('Documento registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }




  getObjetivo(){
    this._GestionService.getObjetivo().subscribe(data =>{
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
    this._GestionService.getEgreso().subscribe(data =>{
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
    this._GestionService.getDoc().subscribe(data =>{
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
    this._GestionService.eliminaObjetivo(id).then(()=>{
      console.log('Objetivo eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaEgreso(id:string){
    this._GestionService.eliminaEgreso(id).then(()=>{
      console.log('Egreso eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaDoc(id:string){
    this._GestionService.eliminaDoc(id).then(()=>{
      console.log('Documento eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }


}


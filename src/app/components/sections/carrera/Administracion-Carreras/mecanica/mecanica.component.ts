import { MecanicaService } from './../../../../../services/firebase/Carrera/Mecanica/mecanica.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mecanica',
  templateUrl: './mecanica.component.html',
  styleUrls: ['./mecanica.component.css']
})

export class MecanicaComponent implements OnInit {
    Objetivo: any[]=[];
    ObjetivoG: any[]=[];
    Egreso: any[]=[];
    Doc: any[]=[];
    Campo: any[]=[];
    ingresarObjetivo: FormGroup;
    ingresarObjetivoG: FormGroup;
    ingresarEgreso: FormGroup;
    ingresarDoc: FormGroup;
    ingresarCampo: FormGroup;
    submitedObjetivo = false;
    submitedObjetivoG = false;
    submitedEgreso = false;
    submitedDoc = false;
    submitedCampo = false;

    constructor(private fbm: FormBuilder, private _MecanicaService: MecanicaService) {
      this.ingresarObjetivo = this.fbm.group({
        titulo_Objetivo:['',Validators.required]
      })
      this.ingresarObjetivoG = this.fbm.group({
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
      this.getObjetivoG()
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
      this._MecanicaService.crearObjetivo(Objetivo).then(()=>{
        console.log('Objetivo registrado con exito!');
      }).catch(error =>{
        console.log(error);
      })
    }
    agregarObjetivoG(){
      this.submitedObjetivoG=true;
      if(this.ingresarObjetivoG.invalid){
        return;
      }
      const ObjetivoG :any={
        contenido:this.ingresarObjetivoG.value.titulo_Objetivo,
        fechacreacion: new Date(),
        fechaactualizacion: new Date()
      }
      this._MecanicaService.crearObjetivoG(ObjetivoG).then(()=>{
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
      this._MecanicaService.crearEgreso(Egreso).then(()=>{
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
      this._MecanicaService.crearDoc(Doc).then(()=>{
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
      this._MecanicaService.crearCampo(Campo).then(()=>{
        console.log('Campo Laboral registrado con exito!');
      }).catch(error =>{
        console.log(error);
      })
    }




    getObjetivo(){
      this._MecanicaService.getObjetivo().subscribe(data =>{
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
    getObjetivoG(){
      this._MecanicaService.getObjetivoG().subscribe(data =>{
        this.ObjetivoG=[];
        data.forEach((element:any) =>{
          /*console.log(element.payload.doc.data());*/
          this.ObjetivoG.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data()
          })
        })
        console.log(this.ObjetivoG);
      })
    }
    getEgreso(){
      this._MecanicaService.getEgreso().subscribe(data =>{
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
      this._MecanicaService.getDoc().subscribe(data =>{
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
      this._MecanicaService.getCampo().subscribe(data =>{
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
      this._MecanicaService.eliminaObjetivo(id).then(()=>{
        console.log('Objetivo eliminado con exito');
      }).catch(error =>{
        console.log(error);
      })
    }
    eliminaObjetivoG(id:string){
      this._MecanicaService.eliminaObjetivoG(id).then(()=>{
        console.log('Objetivo General eliminado con exito');
      }).catch(error =>{
        console.log(error);
      })
    }
    eliminaEgreso(id:string){
      this._MecanicaService.eliminaEgreso(id).then(()=>{
        console.log('Egreso eliminado con exito');
      }).catch(error =>{
        console.log(error);
      })
    }
    eliminaDoc(id:string){
      this._MecanicaService.eliminaDoc(id).then(()=>{
        console.log('Documento eliminado con exito');
      }).catch(error =>{
        console.log(error);
      })
    }
    eliminaCampo(id:string){
      this._MecanicaService.eliminaCampo(id).then(()=>{
        console.log('Documento eliminado con exito');
      }).catch(error =>{
        console.log(error);
      })
    }


  }
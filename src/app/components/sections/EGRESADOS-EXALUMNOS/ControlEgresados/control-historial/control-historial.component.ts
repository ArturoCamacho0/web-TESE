import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HistorialService } from 'src/app/services/firebase/Egresado/Historial/historial.service';

@Component({
  selector: 'app-control-historial',
  templateUrl: './control-historial.component.html',
  styleUrls: ['./control-historial.component.css']
})
export class ControlHistorialComponent implements OnInit {

  submitedhistorial = false;
  submitedDocumentoE = false;
  submitedDocumentoO = false;
  submitedHorario = false;

  historial: any[]=[];
  DocumentoE: any[]=[];
  DocumentoO: any[]=[];
  Horario: any[]=[];

  ingresarhistorial: FormGroup;
  ingresarDocumentoE: FormGroup;
  ingresarDocumentoO: FormGroup;
  ingresarHorario: FormGroup;

  constructor(private fbq: FormBuilder, private _HistorialService: HistorialService) {
    this.ingresarhistorial=this.fbq.group({
    historial:['', Validators.required]
    })
    this.ingresarDocumentoE=this.fbq.group({
      DocumentoE:['', Validators.required]
    })
    this.ingresarDocumentoO=this.fbq.group({
      DocumentoO:['', Validators.required]
    })
    this.ingresarHorario=this.fbq.group({
      Horario:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.gethistorial(),
    this.getDocumentoE(),
    this.getDocumentoO(),
    this.getHorario()
  }

  /*AGREGAR REGISTROS*/
  agregarhistorial(){
    this.submitedhistorial=true;
    if(this.ingresarhistorial.invalid){
      return;
    }
    const historial : any={
      HistorialDesc: this.ingresarhistorial.value.historial
    }
    this._HistorialService.crearhistorial(historial).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarDocumentoE(){
    this.submitedDocumentoE=true;
    if(this.ingresarDocumentoE.invalid){
      return;
    }
    const DocumentoE : any={
      DocEDesc: this.ingresarDocumentoE.value.DocumentoE
    }
    this._HistorialService.crearDocumentoE(DocumentoE).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarDocumentoO(){
    this.submitedDocumentoO=true;
    if(this.ingresarDocumentoO.invalid){
      return;
    }
    const DocumentoO : any={
      DocODesc: this.ingresarDocumentoO.value.DocumentoO
    }
    this._HistorialService.crearDocumentoO(DocumentoO).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarHorario(){
    this.submitedHorario=true;
    if(this.ingresarHorario.invalid){
      return;
    }
    const Horario : any={
      HorarioOpc: this.ingresarHorario.value.Horario
    }
    this._HistorialService.crearHorario(Horario).then(()=>{
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
  gethistorial(){
    this._HistorialService.gethistorial().subscribe(data =>{
      this.historial=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.historial.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.historial);
    })
  }

  getDocumentoE(){
    this._HistorialService.getDocumentoE().subscribe(data =>{
      this.DocumentoE=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.DocumentoE.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.DocumentoE);
    })
  }

  getDocumentoO(){
    this._HistorialService.getDocumentoO().subscribe(data =>{
      this.DocumentoO=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.DocumentoO.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.DocumentoO);
    })
  }

  getHorario(){
    this._HistorialService.getHorario().subscribe(data =>{
      this.Horario=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Horario.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Horario);
    })
  }

   /*ELIMINAR*/
   eliminahistorial(id:string){
    this._HistorialService.eliminahistorial(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaDocumentoE(id:string){
    this._HistorialService.eliminaDocumentoE(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaDocumentoO(id:string){
    this._HistorialService.eliminaDocumentoO(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaHorario(id:string){
    this._HistorialService.eliminaHorario(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

}


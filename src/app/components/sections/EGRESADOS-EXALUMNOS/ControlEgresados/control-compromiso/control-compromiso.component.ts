import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CompromisoService } from 'src/app/services/firebase/Egresado/Compromiso/compromiso.service';

@Component({
  selector: 'app-control-compromiso',
  templateUrl: './control-compromiso.component.html',
  styleUrls: ['./control-compromiso.component.css']
})
export class ControlCompromisoComponent implements OnInit {

  submitedCompromiso = false;
  submitedInea = false;

  Compromiso: any[]=[];
  Inea: any[]=[];

  ingresarCompromiso: FormGroup;
  ingresarInea: FormGroup;

  constructor(private fbq: FormBuilder, private _CompromisoService: CompromisoService) {
    this.ingresarCompromiso=this.fbq.group({
      Compromiso:['', Validators.required]
    })
    this.ingresarInea=this.fbq.group({
      Inea:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getCompromiso(),
    this.getInea()
  }

  /*AGREGAR REGISTROS*/
  agregarCompromiso(){
    this.submitedCompromiso=true;
    if(this.ingresarCompromiso.invalid){
      return;
    }
    const Compromiso : any={
      CompromisoOpc: this.ingresarCompromiso.value.Compromiso
    }
    this._CompromisoService.crearCompromiso(Compromiso).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarInea(){
    this.submitedInea=true;
    if(this.ingresarInea.invalid){
      return;
    }
    const Inea : any={
      IneaOpc: this.ingresarInea.value.Inea
    }
    this._CompromisoService.crearInea(Inea).then(()=>{
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
  getCompromiso(){
    this._CompromisoService.getCompromiso().subscribe(data =>{
      this.Compromiso=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Compromiso.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Compromiso);
    })
  }

  getInea(){
    this._CompromisoService.getInea().subscribe(data =>{
      this.Inea=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Inea.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Inea);
    })
  }

  /*ELIMINAR*/
   eliminaCompromiso(id:string){
    this._CompromisoService.eliminaCompromiso(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaInea(id:string){
    this._CompromisoService.eliminaInea(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }
 }


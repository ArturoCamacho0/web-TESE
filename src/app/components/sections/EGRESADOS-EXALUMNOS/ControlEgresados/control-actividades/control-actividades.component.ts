import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ActividadesCredencialesService } from 'src/app/services/firebase/Egresado/ActividadesYCredenciales/actividades-credenciales.service';

@Component({
  selector: 'app-control-actividades',
  templateUrl: './control-actividades.component.html',
  styleUrls: ['./control-actividades.component.css']
})
export class ControlActividadesComponent implements OnInit {

  submitedActividad = false;
  submitedBeneficio = false;
  submitedCredencial = false;

  Actividad: any[]=[];
  Beneficio: any[]=[];
  Credencial: any[]=[];

  ingresarActividad: FormGroup;
  ingresarBeneficio: FormGroup;
  ingresarCredencial: FormGroup;

  constructor(private fbq: FormBuilder, private _ActividadesCredencialesService: ActividadesCredencialesService) {
    this.ingresarActividad=this.fbq.group({
      Actividad:['', Validators.required]
    })
    this.ingresarBeneficio=this.fbq.group({
      Beneficio:['', Validators.required]
    })
    this.ingresarCredencial=this.fbq.group({
      Credencial:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getActividad(),
    this.getBeneficio(),
    this.getCredencial()
  }

  /*AGREGAR REGISTROS*/
  agregarActividad(){
    this.submitedActividad=true;
    if(this.ingresarActividad.invalid){
      return;
    }
    const Actividad : any={
      ActividadesOpc: this.ingresarActividad.value.Actividad
    }
    this._ActividadesCredencialesService.crearActividad(Actividad).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarBeneficio(){
    this.submitedBeneficio=true;
    if(this.ingresarBeneficio.invalid){
      return;
    }
    const Beneficio : any={
      BeneficiosOpc: this.ingresarBeneficio.value.Beneficio
    }
    this._ActividadesCredencialesService.crearBeneficio(Beneficio).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarCredencial(){
    this.submitedCredencial=true;
    if(this.ingresarCredencial.invalid){
      return;
    }
    const Credencial : any={
      CredencialOpc: this.ingresarCredencial.value.Credencial
    }
    this._ActividadesCredencialesService.crearCredencial(Credencial).then(()=>{
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
  getActividad(){
    this._ActividadesCredencialesService.getActividad().subscribe(data =>{
      this.Actividad=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Actividad.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Actividad);
    })
  }

  getBeneficio(){
    this._ActividadesCredencialesService.getBeneficio().subscribe(data =>{
      this.Beneficio=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Beneficio.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Beneficio);
    })
  }

  getCredencial(){
    this._ActividadesCredencialesService.getCredencial().subscribe(data =>{
      this.Credencial=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Credencial.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Credencial);
    })
  }

  /*ELIMINAR*/
   eliminaActividad(id:string){
    this._ActividadesCredencialesService.eliminaActividad(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaBeneficio(id:string){
    this._ActividadesCredencialesService.eliminaBeneficio(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaCredencial(id:string){
    this._ActividadesCredencialesService.eliminaCredencial(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }
 }



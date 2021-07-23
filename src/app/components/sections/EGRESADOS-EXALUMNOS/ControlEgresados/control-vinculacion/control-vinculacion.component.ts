import { VinculacionService } from './../../../../../services/firebase/Egresado/Vinculacion/vinculacion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-vinculacion',
  templateUrl: './control-vinculacion.component.html',
  styleUrls: ['./control-vinculacion.component.css']
})
export class ControlVinculacionComponent implements OnInit {

  submitedVinculacion = false;
  submitedObjetivo = false;
  submitedEgresados = false;
  submitedEmpresas = false;
  submitedIncubadora = false;

  Vinculacion: any[]=[];
  Objetivo: any[]=[];
  Egresados: any[]=[];
  Empresas: any[]=[];
  Incubadora: any[]=[];

  ingresarVinculacion: FormGroup;
  ingresarObjetivo: FormGroup;
  ingresarEgresados: FormGroup;
  ingresarEmpresas: FormGroup;
  ingresarIncubadora: FormGroup;

  constructor(private fbq: FormBuilder, private _VinculacionService: VinculacionService) {
    this.ingresarVinculacion=this.fbq.group({
      Vinculacion:['', Validators.required]
    })
    this.ingresarObjetivo=this.fbq.group({
      Objetivo:['', Validators.required]
    })
    this.ingresarEgresados=this.fbq.group({
      Egresados:['', Validators.required]
    })
    this.ingresarEmpresas=this.fbq.group({
      Empresas:['', Validators.required]
    })
    this.ingresarIncubadora=this.fbq.group({
      Incubadora:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getVinculacion(),
    this.getObjetivo(),
    this.getEgresados(),
    this.getEmpresas(),
    this.getIncubadora()
  }

  /*AGREGAR REGISTROS*/
  agregarVinculacion(){
    this.submitedVinculacion=true;
    if(this.ingresarVinculacion.invalid){
      return;
    }
    const Vinculacion : any={
      VinculacionDesc: this.ingresarVinculacion.value.Vinculacion
    }
    this._VinculacionService.crearVinculacion(Vinculacion).then(()=>{
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
      ObjetivoDesc: this.ingresarObjetivo.value.Objetivo
    }
    this._VinculacionService.crearObjetivo(Objetivo).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarEgresados(){
    this.submitedEgresados=true;
    if(this.ingresarEgresados.invalid){
      return;
    }
    const Egresados : any={
      EgresadosDesc: this.ingresarEgresados.value.Egresados
    }
    this._VinculacionService.crearEgresados(Egresados).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarEmpresas(){
    this.submitedEmpresas=true;
    if(this.ingresarEmpresas.invalid){
      return;
    }
    const Empresas : any={
      EmpresasDesc: this.ingresarEmpresas.value.Empresas
    }
    this._VinculacionService.crearEmpresas(Empresas).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarIncubadora(){
    this.submitedIncubadora=true;
    if(this.ingresarIncubadora.invalid){
      return;
    }
    const Incubadora : any={
      IncubadoraOpc: this.ingresarIncubadora.value.Incubadora
    }
    this._VinculacionService.crearIncubadora(Incubadora).then(()=>{
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
  getVinculacion(){
    this._VinculacionService.getVinculacion().subscribe(data =>{
      this.Vinculacion=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Vinculacion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Vinculacion);
    })
  }

  getObjetivo(){
    this._VinculacionService.getObjetivo().subscribe(data =>{
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

  getEgresados(){
    this._VinculacionService.getEgresados().subscribe(data =>{
      this.Egresados=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Egresados.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Egresados);
    })
  }

  getEmpresas(){
    this._VinculacionService.getEmpresas().subscribe(data =>{
      this.Empresas=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Empresas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Empresas);
    })
  }

  getIncubadora(){
    this._VinculacionService.getIncubadora().subscribe(data =>{
      this.Incubadora=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Incubadora.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Incubadora);
    })
  }

   /*ELIMINAR*/
   eliminaVinculacion(id:string){
    this._VinculacionService.eliminaVinculacion(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaObjetivo(id:string){
    this._VinculacionService.eliminaObjetivo(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaEgresados(id:string){
    this._VinculacionService.eliminaEgresados(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaEmpresas(id:string){
    this._VinculacionService.eliminaEmpresas(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaIncubadora(id:string){
    this._VinculacionService.eliminaIncubadora(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

 }


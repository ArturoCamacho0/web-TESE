import { MmecatronicaService } from './../../../../../services/firebase/Egresado/MMecatronica/mmecatronica.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-control-mmecatronica',
  templateUrl: './control-mmecatronica.component.html',
  styleUrls: ['./control-mmecatronica.component.css']
})
export class ControlMmecatronicaComponent implements OnInit {

  submitedConcepto = false;
  submitedObjetivo = false;
  submitedPerfil = false;
  submitedEstructura = false;
  submitedArea = false;

  Concepto: any[]=[];
  Objetivo: any[]=[];
  Perfil: any[]=[];
  Estructura: any[]=[];
  Area: any[]=[];

  ingresarConcepto: FormGroup;
  ingresarObjetivo: FormGroup;
  ingresarPerfil: FormGroup;
  ingresarEstructura: FormGroup;
  ingresarArea: FormGroup;

  constructor(private fbq: FormBuilder, private _MmecatronicaService: MmecatronicaService) {
    this.ingresarConcepto=this.fbq.group({
      ConceptoMecatronica:['', Validators.required]
    })
    this.ingresarObjetivo=this.fbq.group({
      ObjetivoMecatronica:['', Validators.required]
    })
    this.ingresarPerfil=this.fbq.group({
      PerfilMecatronica:['', Validators.required]
    })
    this.ingresarEstructura=this.fbq.group({
      EstructuraMecatronica:['', Validators.required]
    })
    this.ingresarArea=this.fbq.group({
      AreaMecatronica:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getConcepto(),
    this.getObjetivo(),
    this.getPerfil(),
    this.getEstructura(),
    this.getArea()
  }

  /*AGREGAR REGISTROS*/
  agregarConcepto(){
    this.submitedConcepto=true;
    if(this.ingresarConcepto.invalid){
      return;
    }
    const Concepto : any={
      ConceptosMmecatronicaDesc: this.ingresarConcepto.value.ConceptoMecatronica
    }
    this._MmecatronicaService.crearConcepto(Concepto).then(()=>{
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
      ObjetivoMmecatronicaDesc: this.ingresarObjetivo.value.ObjetivoMecatronica
    }
    this._MmecatronicaService.crearObjetivo(Objetivo).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarPerfil(){
    this.submitedPerfil=true;
    if(this.ingresarPerfil.invalid){
      return;
    }
    const Perfil : any={
      PerfilMmecatronicaOpc: this.ingresarPerfil.value.PerfilMecatronica
    }
    this._MmecatronicaService.crearPerfil(Perfil).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarEstructura(){
    this.submitedEstructura=true;
    if(this.ingresarEstructura.invalid){
      return;
    }
    const Estructura : any={
      EstructuraMmecatronicaopc: this.ingresarEstructura.value.EstructuraMecatronica
    }
    this._MmecatronicaService.crearEstructura(Estructura).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarArea(){
    this.submitedArea=true;
    if(this.ingresarArea.invalid){
      return;
    }
    const Area : any={
      AreasMmecatronicaOpc: this.ingresarArea.value.AreaMecatronica
    }
    this._MmecatronicaService.crearArea(Area).then(()=>{
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
    this._MmecatronicaService.getConcepto().subscribe(data =>{
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

  getObjetivo(){
    this._MmecatronicaService.getObjetivo().subscribe(data =>{
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
    this._MmecatronicaService.getPerfil().subscribe(data =>{
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

  getEstructura(){
    this._MmecatronicaService.getEstructura().subscribe(data =>{
      this.Estructura=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Estructura.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Estructura);
    })
  }

  getArea(){
    this._MmecatronicaService.getArea().subscribe(data =>{
      this.Area=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Area.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Area);
    })
  }

   /*ELIMINAR*/
   eliminaConcepto(id:string){
    this._MmecatronicaService.eliminaConcepto(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaObjetivo(id:string){
    this._MmecatronicaService.eliminaObjetivo(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaPerfil(id:string){
    this._MmecatronicaService.eliminaPerfil(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaEstructura(id:string){
    this._MmecatronicaService.eliminaEstructura(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaArea(id:string){
    this._MmecatronicaService.eliminaArea(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

}

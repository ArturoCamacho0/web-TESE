import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CursosDiplomadosService } from 'src/app/services/firebase/Egresado/cursos-diplomados/cursos-diplomados.service';

@Component({
  selector: 'app-control-cursos',
  templateUrl: './control-cursos.component.html',
  styleUrls: ['./control-cursos.component.css']
})
export class ControlCursosComponent implements OnInit {

  submitedCurso = false;
  submitedPerfil = false;
  submitedCampo = false;
  submitedCCs = false;

  Curso: any[]=[];
  Perfil: any[]=[];
  Campo: any[]=[];
  CCs: any[]=[];

  ingresarCurso: FormGroup;
  ingresarPerfil: FormGroup;
  ingresarCampo: FormGroup;
  ingresarCCs: FormGroup;

  constructor(private fbq: FormBuilder, private _CursosDiplomadosService: CursosDiplomadosService) {
    this.ingresarCurso=this.fbq.group({
      Curso:['', Validators.required]
    })
    this.ingresarPerfil=this.fbq.group({
      Perfil:['', Validators.required]
    })
    this.ingresarCampo=this.fbq.group({
      Campo:['', Validators.required]
    })
    this.ingresarCCs=this.fbq.group({
      CCs:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getCurso(),
    this.getPerfil(),
    this.getCampo(),
    this.getCCs()
  }

  /*AGREGAR REGISTROS*/
  agregarCurso(){
    this.submitedCurso=true;
    if(this.ingresarCurso.invalid){
      return;
    }
    const Curso : any={
      CursosDesc: this.ingresarCurso.value.Curso
    }
    this._CursosDiplomadosService.crearCurso(Curso).then(()=>{
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
      PerfilDesc: this.ingresarPerfil.value.Perfil
    }
    this._CursosDiplomadosService.crearPerfil(Perfil).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarCampo(){
    this.submitedCampo=true;
    if(this.ingresarCampo.invalid){
      return;
    }
    const Campo : any={
      CampoDesc: this.ingresarCampo.value.Campo
    }
    this._CursosDiplomadosService.crearCampo(Campo).then(()=>{
      console.log('REGISTRO AGREGADO...');
    }).catch(error =>{
      console.log(error);
    })
  }

  agregarCCs(){
    this.submitedCCs=true;
    if(this.ingresarCCs.invalid){
      return;
    }
    const CCs : any={
      CCOpc: this.ingresarCCs.value.CCs
    }
    this._CursosDiplomadosService.crearCCs(CCs).then(()=>{
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
  getCurso(){
    this._CursosDiplomadosService.getCurso().subscribe(data =>{
      this.Curso=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Curso.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Curso);
    })
  }

  getPerfil(){
    this._CursosDiplomadosService.getPerfil().subscribe(data =>{
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

  getCampo(){
    this._CursosDiplomadosService.getCampo().subscribe(data =>{
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

  getCCs(){
    this._CursosDiplomadosService.getCCs().subscribe(data =>{
      this.CCs=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.CCs.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.CCs);
    })
  }

  /*ELIMINAR*/
   eliminaCurso(id:string){
    this._CursosDiplomadosService.eliminaCurso(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaPerfil(id:string){
    this._CursosDiplomadosService.eliminaPerfil(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaCampo(id:string){
    this._CursosDiplomadosService.eliminaCampo(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }

  eliminaCCs(id:string){
    this._CursosDiplomadosService.eliminaCCs(id).then(()=>{
      console.log('REGISTRO ELIMINADO');
    }).catch(error =>{
      console.log(error);
    })
  }
 }

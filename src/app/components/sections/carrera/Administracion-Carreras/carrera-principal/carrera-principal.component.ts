import { PrincipalService } from 'src/app/services/firebase/Carrera/Principal/principal.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrera-principal',
  templateUrl: './carrera-principal.component.html',
  styleUrls: ['./carrera-principal.component.css']
})
export class CarreraPrincipalComponent implements OnInit {
  Mision: any[]=[];
  Vision: any[]=[];
  MisionDiv: any[]=[];
  VisionDiv: any[]=[];
  Doc: any[]=[];
  Img: any[]=[];
  ingresarMision: FormGroup;
  ingresarVision: FormGroup;
  ingresarMisionDiv: FormGroup;
  ingresarVisionDiv: FormGroup;
  ingresarDoc: FormGroup;
  ingresarImg: FormGroup;
  actMision: FormGroup;
  submitedMision = false;
  submitedVision = false;
  submitedMisionDiv = false;
  submitedVisionDiv = false;
  submitedDoc = false;
  submitedImg = false;
  subMision = false;

  constructor(private fbm: FormBuilder, private _PrincipalService: PrincipalService) {
    this.ingresarMision = this.fbm.group({
      titulo_mision:['',Validators.required]
    })
    this.ingresarVision = this.fbm.group({
      titulo_vision:['',Validators.required]
    })
    this.ingresarMisionDiv = this.fbm.group({
      titulo_misionDiv:['',Validators.required]
    })
    this.ingresarVisionDiv = this.fbm.group({
      titulo_visionDiv:['',Validators.required]
    })
    this.ingresarDoc = this.fbm.group({
      contenido_Doc:['',Validators.required],
      titulo_Doc:['',Validators.required]
    })
    this.ingresarImg = this.fbm.group({
      contenido_Img:['',Validators.required]
    })
    this.actMision = this.fbm.group({
      mision_contenido:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.getMision()
    this.getVision()
    this.getMisionDiv()
    this.getVisionDiv()
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
  agregarMision(){
    this.submitedMision=true;
    if(this.ingresarMision.invalid){
      return;
    }
    const mision :any={
      contenido:this.ingresarMision.value.titulo_mision,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._PrincipalService.crearMision(mision).then(()=>{
      console.log('Mision registrada con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarVision(){
    this.submitedVision=true;
    if(this.ingresarVision.invalid){
      return;
    }
    const vision :any={
      contenido:this.ingresarVision.value.titulo_vision,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._PrincipalService.crearVision(vision).then(()=>{
      console.log('Vision registrada con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarMisionDiv(){
    this.submitedMisionDiv=true;
    if(this.ingresarMisionDiv.invalid){
      return;
    }
    const misionDiv :any={
      contenido:this.ingresarMisionDiv.value.titulo_misionDiv,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._PrincipalService.crearMisionDiv(misionDiv).then(()=>{
      console.log('Mision registrada con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }
  agregarVisionDiv(){
    this.submitedVisionDiv=true;
    if(this.ingresarVisionDiv.invalid){
      return;
    }
    const visionDiv :any={
      contenido:this.ingresarVisionDiv.value.titulo_visionDiv,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._PrincipalService.crearVisionDiv(visionDiv).then(()=>{
      console.log('Vision registrada con exito!');
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
      titulo:this.ingresarDoc.value.titulo_Doc,
      contenido:this.ingresarDoc.value.contenido_Doc,
      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this._PrincipalService.crearDoc(Doc).then(()=>{
      console.log('Documento registrado con exito!');
    }).catch(error =>{
      console.log(error);
    })
  }




  getMision(){
    this._PrincipalService.getMision().subscribe(data =>{
      this.Mision=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Mision.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Mision);
    })
  }
  getVision(){
    this._PrincipalService.getVision().subscribe(data =>{
      this.Vision=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.Vision.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.Vision);
    })
  }
  getMisionDiv(){
    this._PrincipalService.getMisionDiv().subscribe(data =>{
      this.MisionDiv=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.MisionDiv.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.MisionDiv);
    })
  }
  getVisionDiv(){
    this._PrincipalService.getVisionDiv().subscribe(data =>{
      this.VisionDiv=[];
      data.forEach((element:any) =>{
        /*console.log(element.payload.doc.data());*/
        this.VisionDiv.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.VisionDiv);
    })
  }
  getDoc(){
    this._PrincipalService.getDoc().subscribe(data =>{
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



  eliminaMision(id:string){
    this._PrincipalService.eliminaMision(id).then(()=>{
      console.log('Mision eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaVision(id:string){
    this._PrincipalService.eliminaVision(id).then(()=>{
      console.log('Vision eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaVisionDiv(id:string){
    this._PrincipalService.eliminaVisionDiv(id).then(()=>{
      console.log('Vision eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaMisionDiv(id:string){
    this._PrincipalService.eliminaMisionDiv(id).then(()=>{
      console.log('Mision eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
  eliminaDoc(id:string){
    this._PrincipalService.eliminaDoc(id).then(()=>{
      console.log('Documento eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }



}

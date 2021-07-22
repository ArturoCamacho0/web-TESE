import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MquimicaService } from 'src/app/services/firebase/Egresado/MQuimica/Mquimica.service';


@Component({
  selector: 'app-control-mquimica',
  templateUrl: './control-mquimica.component.html',
  styleUrls: ['./control-mquimica.component.css']
})
export class ControlMquimicaComponent implements OnInit {

  submitedConcepto = false;

  Concepto: any[]=[];
  ConceptoD: any[]=[];

  ingresarConcepto: FormGroup;
  ingresarConceptoD: FormGroup;

  constructor(private fbq: FormBuilder, private _MquimicaService: MquimicaService) {
    this.ingresarConcepto=this.fbq.group({
      ConceptoQuimica:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getConcepto()
  }

  /*AGREGAR REGISTROS*/
  agregarConcepto(){
    this.submitedConcepto=true;
    if(this.ingresarConcepto.invalid){
      return;
    }
    const Concepto : any={
      ConceptosMQuimicaDesc: this.ingresarConcepto.value.conceptos
    }
    this._MquimicaService.crearConcepto(Concepto).then(()=>{
      console.log('El concepto ha sido registrado...');
    }).catch(error =>{
      console.log(error);
    })
  }


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
    this._MquimicaService.getConcepto().subscribe(data =>{
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

}

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
import { ObserversModule } from '@angular/cdk/observers';
import { HistoriaService } from 'src/app/services/firebase/Identidad-institucional/Historia/historia.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  titles: any [] = [];
  contends_historia: any [] = [];
  dropdown_carreras: any [] = [];
  dropdown_posgrados: any [] = [];
  dropdown_programas: any [] = [];
  dropdown_ambito: any [] = [];
  dropdown_investigacion: any [] = [];
  dropdown_cursos: any [] = [];
  dropdown_normas: any [] = [];
  organigrama : any [] = [];





  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor(firestore: AngularFirestore,private _historiaService: HistoriaService) {



   }



  ngOnInit(): void {
    this.getContenido_H()
    this.getCarrera()
    this.getPosgrado()
    this.getPrograma()
    this.getAmbito()
    this.getInvestigacion()
    this.getCurso()
    this.getNorma()
    this.getOrganigrama()
    this.getTitulos()
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
  getContenido_H(){
    this._historiaService.getContenido_H().subscribe(data =>{
      this.contends_historia = [];
       data.forEach((element:any) => {

         this.contends_historia.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.contends_historia);
    });
  }

  getCarrera(){
    this._historiaService.getCarrera().subscribe(data =>{
      this.dropdown_carreras = [];
       data.forEach((element:any) => {

         this.dropdown_carreras.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_carreras);
    });
  }

  getPosgrado(){
    this._historiaService.getPosgrado().subscribe(data =>{
      this.dropdown_posgrados = [];
       data.forEach((element:any) => {

         this.dropdown_posgrados.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_posgrados);
    });
  }

  getPrograma(){
    this._historiaService.getPrograma().subscribe(data =>{
      this.dropdown_programas = [];
       data.forEach((element:any) => {

         this.dropdown_programas.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_programas);
    });
  }

  getAmbito(){
    this._historiaService.getAmbito().subscribe(data =>{
      this.dropdown_ambito = [];
       data.forEach((element:any) => {

         this.dropdown_ambito.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_ambito);
    });
  }

  getInvestigacion(){
    this._historiaService.getInvestigacion().subscribe(data =>{
      this.dropdown_investigacion = [];
       data.forEach((element:any) => {

         this.dropdown_investigacion.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_investigacion);
    });
  }

  getCurso(){
    this._historiaService.getCurso().subscribe(data =>{
      this.dropdown_cursos = [];
       data.forEach((element:any) => {

         this.dropdown_cursos.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_cursos);
    });
  }

  getNorma(){
    this._historiaService.getNorma().subscribe(data =>{
      this.dropdown_normas = [];
       data.forEach((element:any) => {

         this.dropdown_normas.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.dropdown_normas);
    });
  }


  getOrganigrama(){
    this._historiaService.getOrganigrama().subscribe(data =>{
      this.organigrama = [];
       data.forEach((element:any) => {

         this.organigrama.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.organigrama);
    });
  }

  getTitulos(){
    this._historiaService.getTitulos().subscribe(data =>{
      this.titles = [];
       data.forEach((element:any) => {

         this.titles.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.titles);
    });
  }


}

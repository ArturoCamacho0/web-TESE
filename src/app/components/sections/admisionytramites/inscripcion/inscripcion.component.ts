import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
import {InscripcionService} from 'src/app/services/firebase/AdmisionYTramites/Inscripcion/inscripcion.service';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {



  content_inscripcion: any [] = [];
  content_precio: any [] = [];

  content_fecha: any [] = [];


  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor(firestore: AngularFirestore,private _inscripcionService:InscripcionService ) { }


  ngOnInit(): void {
    this.getContenido_I()
    this.getContenido_P()
    this.getContenido_F()
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

  getContenido_I(){
    this._inscripcionService.getContenido_I().subscribe(data =>{
      this.content_inscripcion = [];
       data.forEach((element:any) => {

         this.content_inscripcion.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.content_inscripcion);
    });
  }

  getContenido_P(){
    this._inscripcionService.getContenido_P().subscribe(data =>{
      this.content_precio = [];
       data.forEach((element:any) => {

         this.content_precio.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.content_precio);
    });
  }


getContenido_F(){
  this._inscripcionService.getContenido_F().subscribe(data =>{
    this.content_fecha = [];
     data.forEach((element:any) => {

       this.content_fecha.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
       })

     });
     console.log(this.content_fecha);
  });
}



}

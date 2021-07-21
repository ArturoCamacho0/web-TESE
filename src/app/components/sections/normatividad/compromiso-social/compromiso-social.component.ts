import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
import {CompromisoService} from 'src/app/services/firebase/Normatividad/compromiso/compromiso.service';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-compromiso-social',
  templateUrl: './compromiso-social.component.html',
  styleUrls: ['./compromiso-social.component.css']
})
export class CompromisoSocialComponent implements OnInit {



  content_inscripcion: any [] = [];

  content_inscripcion1: any [] = [];
  titles: any [] = [];
  content_inscripcion2: any [] = [];



  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor(firestore: AngularFirestore,private _CompromisoService:CompromisoService ) { }


  ngOnInit(): void {
    this.getContenido_I()
    this.getContenido_N()
    this.getTitulos()
    this.getContenido_L()

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
    this._CompromisoService.getContenido_I().subscribe(data =>{
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

  getContenido_N(){
    this._CompromisoService.getContenido_N().subscribe(data =>{
      this.content_inscripcion1 = [];
       data.forEach((element:any) => {

         this.content_inscripcion1.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.content_inscripcion1);
    });
  }

  getContenido_L(){
    this._CompromisoService.getContenido_L().subscribe(data =>{
      this.content_inscripcion2 = [];
       data.forEach((element:any) => {

         this.content_inscripcion2.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.content_inscripcion2);
    });
  }
  getTitulos(){
    this._CompromisoService.getTitulos().subscribe(data =>{
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
import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
import { AngularFirestore } from '@angular/fire/firestore';
import {ReinscripcionService} from 'src/app/services/firebase/AdmisionYTramites/reinscripcion/reinscripcion.service';
@Component({
  selector: 'app-reinscripcion',
  templateUrl: './reinscripcion.component.html',
  styleUrls: ['./reinscripcion.component.css']
})
export class ReinscripcionComponent implements OnInit {


  content_reinscripcion: any [] = [];
  content_parrafo2: any [] = [];



  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor(firestore: AngularFirestore,private _reinscripcionService: ReinscripcionService) { }

  ngOnInit(): void {
    this.getContenido_R()


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


  getContenido_R(){
    this._reinscripcionService.getContenido_R().subscribe(data =>{
      this.content_reinscripcion = [];
       data.forEach((element:any) => {

         this.content_reinscripcion.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.content_reinscripcion);
    });
  }

  getContenido_P2(){
    this._reinscripcionService.getContenido_P2().subscribe(data =>{
      this.content_parrafo2 = [];
       data.forEach((element:any) => {

         this.content_reinscripcion.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.content_reinscripcion);
    });
  }


}

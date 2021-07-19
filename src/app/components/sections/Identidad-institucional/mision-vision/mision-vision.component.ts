import { MisionService } from './../../../../services/firebase/Identidad-institucional/Mision/mision.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
import { ObserversModule } from '@angular/cdk/observers';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.css']
})
export class MisionVisionComponent implements OnInit {

  documents_mision: any[]=[];
  contends_mision: any[]=[];
  organigrama : any [] = [];




  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor(firestore: AngularFirestore, private _misionService: MisionService) {

   }

  ngOnInit(): void {
    this.getDocumento()
    this.getContenido_Mision()
    this.getOrganigrama()
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
  getDocumento(){
    this._misionService.getDocumento().subscribe(data =>{
      this.documents_mision = [];
       data.forEach((element:any) => {

         this.documents_mision.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.documents_mision);
    });
  }

  getContenido_Mision(){
    this._misionService.getContenido_Mision().subscribe(data =>{
      this.contends_mision = [];
       data.forEach((element:any) => {

         this.contends_mision.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.contends_mision);
    });
  }

  getOrganigrama(){
    this._misionService.getOrganigrama().subscribe(data =>{
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

}

import { LogoService } from './../../../../services/firebase/Identidad-institucional/Logo/logo.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

   /*variable tipo observable*/
   titles_logo: any[] = [];

   imgs_logo:any[] = [];
   organigrama : any [] = [];
   contenido_logo: any[] = [];
   /* Una clase export que se necesita para el carrousel y su flujo de datos */
   public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;


   /*Agregar firebase en el contructor y llamado de datos*/
   constructor(firestore: AngularFirestore, private _logoService: LogoService) {





   }

   ngOnInit(): void {
     this.getContenido_Logo()
     this.getTitulos()
     this.getImagen()
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

   getContenido_Logo(){
     this._logoService.getContenido_Logo().subscribe(data =>{
       this.contenido_logo = [];
        data.forEach((element:any) => {

          this.contenido_logo.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data()
          })

        });
        console.log(this.contenido_logo);
     });
   }

   getTitulos(){
    this._logoService.getTitulos().subscribe(data =>{
      this.titles_logo = [];
       data.forEach((element:any) => {

         this.titles_logo.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.titles_logo);
    });
  }

  getImagen(){
    this._logoService.getImagen().subscribe(data =>{
      this.imgs_logo = [];
       data.forEach((element:any) => {

         this.imgs_logo.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.imgs_logo);
    });
  }

  getOrganigrama(){
    this._logoService.getOrganigrama().subscribe(data =>{
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

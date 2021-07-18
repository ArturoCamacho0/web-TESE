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
   titles: Observable<any[]>
   contends: Observable<any[]>
   pictures: Observable<any[]>
   organigrama : Observable<any[]>

   /* Una clase export que se necesita para el carrousel y su flujo de datos */
   public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;

  contenido_logo: any[] = [];
   /*Agregar firebase en el contructor y llamado de datos*/
   constructor(firestore: AngularFirestore, private _logoService: LogoService) {



     /* Logo = nombre de coleccion*/
     this.titles = firestore.collectionGroup('Titulos-logo').valueChanges();
    this.pictures = firestore.collectionGroup('Imagenes-logo').valueChanges();
     this.organigrama = firestore.collection('/Identidad/Organigrama/DatosOrganigrama').valueChanges();

   }

   ngOnInit(): void {
     this.getContenido_Logo()
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



}

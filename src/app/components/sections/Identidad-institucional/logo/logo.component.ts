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

   /* Una clase export que se necesita para el carrousel y su flujo de datos */
   public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;


   /*Agregar firebase en el contructor y llamado de datos*/
   constructor(firestore: AngularFirestore) {
     /* Logo = nombre de coleccion*/
     this.titles = firestore.collectionGroup('Titulos-logo').valueChanges();
     this.contends = firestore.collectionGroup('Contenidos-logo').valueChanges();
     this.pictures = firestore.collectionGroup('Imagenes-logo').valueChanges();

   }

   ngOnInit(): void {
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

}

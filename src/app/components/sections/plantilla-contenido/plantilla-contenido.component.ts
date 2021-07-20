import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


/* Las dos importaciones de abajo son necesarias para implementar un carrousel dinamico en tu componente, sigue la logica de la importacion y su ruta. ademas de tener quue copiar el ts carousel para poder agregarle datos personalizados */
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../carousel/icarousel-item.metadata';
@Component({
  selector: 'app-plantilla-contenido',
  templateUrl: './plantilla-contenido.component.html',
  styleUrls: ['./plantilla-contenido.component.css']
})
export class PlantillaContenidoComponent implements OnInit {
  items: Observable<any[]>
  /* Una clase export que se necesita para el carrousel y su flujo de datos */
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor(firestore: AngularFirestore) {
   /* Logo = nombre de coleccion*/
   this.items = firestore.collection('Plantilla/xd').valueChanges();


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

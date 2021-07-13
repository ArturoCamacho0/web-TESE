import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  titles: Observable<any[]>
  contends: Observable<any[]>
  dropdowns: Observable<any[]>
  dropdowns_titles: Observable<any[]>
  dropdowns_contends: Observable<any[]>


  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor(firestore: AngularFirestore) {
    this.titles= firestore.collectionGroup('Titulos-historia').valueChanges();
    this.contends = firestore.collectionGroup('Contenidos-historia').valueChanges();
    this.dropdowns = firestore.collectionGroup('Dropdowns-historia').valueChanges();
    this.dropdowns_titles = firestore.collectionGroup('Contenido-dropdown').valueChanges();
    this.dropdowns_contends = firestore.collectionGroup('Subcontenido_drop').valueChanges();
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

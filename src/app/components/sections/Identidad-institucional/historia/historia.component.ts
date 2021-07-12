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
  items: Observable<any[]>


  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collectionGroup('HistoriaDatos').valueChanges();

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

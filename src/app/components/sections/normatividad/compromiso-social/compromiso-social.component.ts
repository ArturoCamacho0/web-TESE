import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-compromiso-social',
  templateUrl: './compromiso-social.component.html',
  styleUrls: ['./compromiso-social.component.css']
})
export class CompromisoSocialComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  items: Observable<any[]>

  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('Normatividad').valueChanges(); 
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

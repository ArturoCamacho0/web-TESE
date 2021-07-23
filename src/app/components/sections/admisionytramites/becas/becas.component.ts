import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../../carousel/icarousel-item.metadata';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-becas',
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.component.css']
})
export class BecasComponent implements OnInit {
  items: Observable<any[]>
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;

constructor(firestore: AngularFirestore) {
  /* Logo = nombre de coleccion*/
  this.items = firestore.collection('/AdmisionYTramites/Paginas/Becas').valueChanges();

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

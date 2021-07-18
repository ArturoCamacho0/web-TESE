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

  documents: Observable<any[]>
  contends: Observable<any[]>
  organigrama: Observable<any[]>




  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor(firestore: AngularFirestore) {
    this.documents = firestore.collectionGroup('MisionDocumentos').valueChanges();
    this.contends = firestore.collectionGroup('MisionDatos').valueChanges();
    this.organigrama = firestore.collection('/Identidad/Organigrama/DatosOrganigrama').valueChanges();


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

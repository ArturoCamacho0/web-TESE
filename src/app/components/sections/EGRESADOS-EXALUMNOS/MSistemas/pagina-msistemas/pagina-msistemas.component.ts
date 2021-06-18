import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_MSISTEMAS } from '../banner-sistemas/bannerMsistemas';
import { ICarouselItem } from '../../../carousel/icarousel-item.metadata';

@Component({
  selector: 'app-pagina-msistemas',
  templateUrl: './pagina-msistemas.component.html',
  styleUrls: ['./pagina-msistemas.component.css']
})
export class PaginaMsistemasComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_MSISTEMAS;
  constructor() { }

  ngOnInit(): void {
  }
  op  = true;
  op2 = false;
  op3 = false;
  op4 = false;
  op5 = false;
  op6 = false;
  n = 0;

  getId(op1:number): void{
    this.n=op1;
    if(op1==1){
      this.op =false;
      this.op2=true;
      this.op3=false;
      this.op4=false;
      this.op5=false;
      this.op6=false;
    }
    if(op1==2){
      this.op =false;
      this.op2=false;
      this.op3=true;
      this.op4=false;
      this.op5=false;
      this.op6=false;
    }
    if(op1==3){
      this.op =false;
      this.op2=false;
      this.op3=false;
      this.op4=true;
      this.op5=false;
      this.op6=false;
    }
    if(op1==4){
      this.op =false;
      this.op2=false;
      this.op3=false;
      this.op4=false;
      this.op5=true;
      this.op6=false;
    }
    if(op1==5){
      this.op =false;
      this.op2=false;
      this.op3=false;
      this.op4=false;
      this.op5=false;
      this.op6=true;
    }
  }


  //botones de ayuda al menu
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

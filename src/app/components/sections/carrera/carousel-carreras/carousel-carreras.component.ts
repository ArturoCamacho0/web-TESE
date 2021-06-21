import { Component, OnInit, Input } from '@angular/core';
import {ICarouselItemCarreras} from './Icarousel-carreras.item.metadata';


@Component({
  selector: 'app-carousel-carreras',
  templateUrl: './carousel-carreras.component.html',
  styleUrls: ['./carousel-carreras.component.scss']
})
export class CarouselCarrerasComponent implements OnInit {
  data:number;
  m:number;
  /**
   * Custom Properties
   */
   @Input() height = 500;
   @Input() isFullScreen = false;
   @Input() items: ICarouselItemCarreras[] = [];
   /**
    * Final Properties
    */
   public finalHeight: string | number = 0;
   public currentPosition = 0;
   a="/";
   constructor() {
     this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;

     setInterval(()=>this.automatic(),5000);
     this.m=1;
    }

   ngOnInit() {
     this.items.map( ( i, index ) => {
       i.id = index;
       i.marginLeft = 0;
     });
   }

   setCurrentPosition(position: number) {
     this.currentPosition = position;
     this.items.find(i => i.id === 0).marginLeft = -100 * position;
   }

   setNext() {
     let finalPercentage = 0;
     let nextPosition = this.currentPosition + 1;
     if (nextPosition <= this.items.length - 1) {
       finalPercentage = -100 * nextPosition;
     } else {
       nextPosition = 0;
     }
     this.items.find(i => i.id === 0).marginLeft = finalPercentage;
     this.currentPosition = nextPosition;
     this.m=0;
   }

   setBack() {
     let finalPercentage = 0;
     let backPosition = this.currentPosition  - 1;
     if (backPosition >= 0) {
       finalPercentage = -100 * backPosition;
     } else {
       backPosition = this.items.length - 1;
       finalPercentage = -100 * backPosition;
     }
     this.items.find(i => i.id === 0).marginLeft = finalPercentage;
     this.currentPosition = backPosition;
     this.m=0;
   }
   automatic(){
     if(this.m==1){
      this.setNext();
     }
     if(this.m==0){
       this.m=1;
     }
   }


 }

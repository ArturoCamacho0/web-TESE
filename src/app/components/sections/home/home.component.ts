import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../carousel/icarousel-item.metadata';
import { UserService } from 'src/app/services/firebase/user/user.service';
import { User } from 'src/app/services/models/User';
import {HomeService} from '../../../services/firebase/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  panelOpenState = false;
  public content;
  public links;
  public activities;
  public careers;
  public statusC = false;
  public statusL = false;

  constructor(
    private homeService: HomeService
  ){
    this.getContent();
    this.getLinks();
    this.getActivities();
    this.getCareers();
  }

  ngOnInit(): void {}

  getContent(): void{
    this.homeService.getContent().subscribe(
      response => {
        this.content = JSON.parse(JSON.stringify(response));
        this.statusC = true;
      },
      error => {
        console.error(error);
      }
    );
  }

  getLinks(): void{
    this.homeService.getLinks().subscribe(
      response => {
        this.links = JSON.parse(JSON.stringify(response));
        this.statusL = true;
      },
      error => {
        console.error(error);
      }
    );
  }

  getActivities(): void{
    this.homeService.getActivities().subscribe(
      response => {
        this.activities = JSON.parse(JSON.stringify(response));
      },
      error => {
        console.error(error);
      }
    );
  }

  getCareers(): void{
    this.homeService.getCareers().subscribe(
      response => {
        this.careers = JSON.parse(JSON.stringify(response));
      },
      error => {
        console.error(error);
      }
    );
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

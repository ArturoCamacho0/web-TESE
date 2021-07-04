import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_BANNERP } from './carousel';
import { ICarouselItem } from '../carousel/icarousel-item.metadata';
import { UserService } from 'src/app/services/firebase/user/user.service';
import { User } from 'src/app/services/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  panelOpenState = false;
  public users;
  public user: User;

  constructor(
    private _userService: UserService
  ){
    //this.getUsers();

    //this.user = new User(201822278, 'Arturo', 22, 'Estudiante');

    //this.saveUser();
  }

  ngOnInit(): void {}

  getUsers(){
    this._userService.getAll().subscribe(
      response => {
        //console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  saveUser(){
    let data = JSON.parse(JSON.stringify(this.user));

    this._userService.save(data).then(
      res => {
        console.log(res);
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
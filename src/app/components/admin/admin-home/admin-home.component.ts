import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../../services/firebase/home/home.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  panelOpenState = false;

  constructor(private homeService: HomeService){
    this.getContent();
  }

  ngOnInit(): void {}
  // Funcion que llama al servicio para traer los datos
  getContent(): void{
    this.homeService.getContent().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }


  open(){
    let r = document.getElementById('right');
    r.classList.toggle('open');

    let l = document.getElementById('left');
    l.classList.toggle('open');
  }

}

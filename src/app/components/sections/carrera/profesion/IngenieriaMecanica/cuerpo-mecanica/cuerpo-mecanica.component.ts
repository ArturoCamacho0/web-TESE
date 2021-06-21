import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-mecanica',
  templateUrl: './cuerpo-mecanica.component.html',
  styleUrls: ['./cuerpo-mecanica.component.css']
})
export class CuerpoMecanicaComponent implements OnInit {

  constructor() { }

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

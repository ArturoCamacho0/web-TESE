import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-aeronautica',
  templateUrl: './cuerpo-aeronautica.component.html',
  styleUrls: ['./cuerpo-aeronautica.component.css']
})
export class CuerpoAeronauticaComponent implements OnInit {

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


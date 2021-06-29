import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-informatica',
  templateUrl: './cuerpo-informatica.component.html',
  styleUrls: ['./cuerpo-informatica.component.css']
})
export class CuerpoInformaticaComponent implements OnInit {

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

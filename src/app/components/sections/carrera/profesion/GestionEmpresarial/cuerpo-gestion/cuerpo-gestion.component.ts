import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-gestion',
  templateUrl: './cuerpo-gestion.component.html',
  styleUrls: ['./cuerpo-gestion.component.css']
})
export class CuerpoGestionComponent implements OnInit {

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

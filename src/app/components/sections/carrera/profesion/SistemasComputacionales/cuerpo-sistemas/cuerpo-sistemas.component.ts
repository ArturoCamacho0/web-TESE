import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-sistemas',
  templateUrl: './cuerpo-sistemas.component.html',
  styleUrls: ['./cuerpo-sistemas.component.css']
})
export class CuerpoSistemasComponent implements OnInit {

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

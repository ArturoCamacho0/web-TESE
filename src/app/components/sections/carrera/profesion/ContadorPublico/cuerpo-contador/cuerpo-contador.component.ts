import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-contador',
  templateUrl: './cuerpo-contador.component.html',
  styleUrls: ['./cuerpo-contador.component.css']
})
export class CuerpoContadorComponent implements OnInit {

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

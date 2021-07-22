import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-egresados',
  templateUrl: './control-egresados.component.html',
  styleUrls: ['./control-egresados.component.css']
})
export class ControlEgresadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //botones de ayuda al menu
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

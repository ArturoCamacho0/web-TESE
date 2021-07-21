import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-egresados',
  templateUrl: './panel-egresados.component.html',
  styleUrls: ['./panel-egresados.component.css']
})
export class PanelEgresadosComponent implements OnInit {

  config: any;
  collection = { count: 60, data:[] }

  constructor() { }

  ngOnInit(): void {

    for(var i=0; i < this.collection.count; i++){
      this.collection.data.push({
        id: i,
        nombre: "nombre " + i,
        apellido: "apellido " + i,
      })
    }

    }

  eliminar(item:any):void{
    this.collection.data.pop();
  }//falta el item en pop

}

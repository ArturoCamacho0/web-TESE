import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel-egresados',
  templateUrl: './panel-egresados.component.html',
  styleUrls: ['./panel-egresados.component.css']
})
export class PanelEgresadosComponent implements OnInit {

  config: any;
  collection = { count: 6, data:[] }

  closeResult = '';
  dato:FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {

    this.dato = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    })

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


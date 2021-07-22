import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HistoriaService } from 'src/app/services/firebase/Identidad-institucional/Historia/historia.service';
import { convertMetaToOutput } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-edit-carrera',
  templateUrl: './edit-carrera.component.html',
  styleUrls: ['./edit-carrera.component.css']
})



export class EditCarreraComponent implements OnInit {

  FormularioEditar: FormGroup;
  id: string | null;
  titulo = 'Editar';


  constructor(firestore : AngularFirestore, private fbc: FormBuilder,
    private aRoute: ActivatedRoute, private _historiaService: HistoriaService,
    private router: Router) {

      this.FormularioEditar = this.fbc.group({
        imagen:['', Validators.required],
        nombre:['', Validators.required],
        ruta:['', Validators.required]
      })

      this.id = this.aRoute.snapshot.paramMap.get('id');
      console.log(this.id)
     }

  ngOnInit(): void {
    this.esEditar()
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

  esEditar(){
    this.titulo = 'Editar Imagen'
    if(this.id !== null){
      this._historiaService.getCarreraEdit(this.id).subscribe(data =>{
        console.log(data.payload.data()['Titulo_subdrop']);
        this.FormularioEditar.setValue({
          imagen: data.payload.data()['Dir_subdrop'],
          nombre: data.payload.data()['Titulo_subdrop'],
          ruta: data.payload.data()['ruta']
        })
      })
    }
  }
  editarCarrera(){
    const carrera: any = {
      Dir_subdrop : this.FormularioEditar.value.imagen,
      Titulo_subdrop : this.FormularioEditar.value.nombre,
      ruta: this.FormularioEditar.value.ruta
    }
    this._historiaService.actualizarCarrera(this.id, carrera).then(()=>{
      console.log('carrera actualizada')
    })
    this.router.navigate(['/admin-historia']);
  }


}

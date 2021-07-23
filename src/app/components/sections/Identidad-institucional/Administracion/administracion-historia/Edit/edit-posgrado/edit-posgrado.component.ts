import { HistoriaService } from './../../../../../../../services/firebase/Identidad-institucional/Historia/historia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-posgrado',
  templateUrl: './edit-posgrado.component.html',
  styleUrls: ['./edit-posgrado.component.css']
})
export class EditPosgradoComponent implements OnInit {

  FormularioEditar: FormGroup;
  id: string | null;
  titulo = 'Editar';


  constructor(firestore : AngularFirestore, private fbp: FormBuilder,
    private aRoute: ActivatedRoute, private _historiaService: HistoriaService,
    private router: Router) {

      this.FormularioEditar = this.fbp.group({
        imagen:['', Validators.required],
        nombre:['', Validators.required],
        ruta: ['', Validators.required]
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
      this._historiaService.getPosgradoEdit(this.id).subscribe(data =>{
       this.FormularioEditar.setValue({
         imagen: data.payload.data()['Dir_subdrop'],
         nombre: data.payload.data()['Titulo_subdrop'],
         ruta: data.payload.data()['ruta']
       })
      })
    }
  }

  editarPosgrado(){
    const posgrado: any = {
      Dir_subdrop : this.FormularioEditar.value.imagen,
      Titulo_subdrop: this.FormularioEditar.value.nombre,
      ruta: this.FormularioEditar.value.ruta
    }
    this._historiaService.actualizarPosgrado(this.id, posgrado).then(()=>{
      console.log('posgrado actualizado')
    })
    this.router.navigate(['/admin-historia']);
  }

}

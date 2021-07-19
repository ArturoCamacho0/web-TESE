import { LogoService } from 'src/app/services/firebase/Identidad-institucional/Logo/logo.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-img-logo',
  templateUrl: './img-logo.component.html',
  styleUrls: ['./img-logo.component.css']
})
export class ImgLogoComponent implements OnInit {
  FormularioEditar: FormGroup;
  id: string | null;
  titulo ='Editar';



  constructor(firestore: AngularFirestore,private fblogo : FormBuilder,
    private aRoute: ActivatedRoute, private _logoService: LogoService,
    private router: Router) {

    this.FormularioEditar = this.fblogo.group({
      titulo:['',Validators.required],
      direccion:['', Validators.required]

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
      this._logoService.getImagenEdit(this.id).subscribe(data => {
        console.log(data.payload.data()['Titulo']);
        this.FormularioEditar.setValue({
          titulo: data.payload.data()['Titulo'],
          direccion: data.payload.data()['Dir']
        })
      })
    }


  }
  editarImagen(){

    const imagen: any = {
      Titulo: this.FormularioEditar.value.titulo,
      Dir: this.FormularioEditar.value.direccion
    }
      this._logoService.actualizarImagen(this.id,imagen).then(()=>{
        console.log('Imagen actualizada')
      })
      this.router.navigate(['/admin-logo']);
    }


}

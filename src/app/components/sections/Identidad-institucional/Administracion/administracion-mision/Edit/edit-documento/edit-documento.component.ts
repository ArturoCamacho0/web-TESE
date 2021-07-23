
import { MisionService } from './../../../../../../../services/firebase/Identidad-institucional/Mision/mision.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-documento',
  templateUrl: './edit-documento.component.html',
  styleUrls: ['./edit-documento.component.css']
})
export class EditDocumentoComponent implements OnInit {

  FormularioEditar: FormGroup;
  id: string | null;
  titulo = 'Editar';

  constructor(firestore: AngularFirestore, private fbd: FormBuilder,
    private aRoute: ActivatedRoute, private _misionService: MisionService,
    private router: Router) {

      this.FormularioEditar =  this.fbd.group({
        ruta:['', Validators.required],

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
    this.titulo = 'Editar Documento'
    if(this.id !== null){
      this._misionService.getDocumentoEdit(this.id).subscribe(data =>{
        this.FormularioEditar.setValue({
          ruta: data.payload.data()['Dir_Documento']
        })
      })
    }
  }

  editarDocumento(){
    const documento: any ={
      Dir_Documento: this.FormularioEditar.value.ruta
    }
    this._misionService.actualizarDocumento(this.id, documento).then(()=>{
      console.log('documento actualizado')
    })
    this.router.navigate(['/admin-mision'])
  }

}

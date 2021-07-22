import { OrganigramaService } from './../../../../../../../services/firebase/Identidad-institucional/Organigrama/organigrama.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-orgranigrama',
  templateUrl: './edit-orgranigrama.component.html',
  styleUrls: ['./edit-orgranigrama.component.css']
})
export class EditOrgranigramaComponent implements OnInit {

  FormularioEditar : FormGroup;
  id: string | null;
  titulo = 'Editar';

  constructor(firestore : AngularFirestore, private fbo: FormBuilder,
    private aRoute: ActivatedRoute, private _organigramaService: OrganigramaService,
    private router: Router) {


      this.FormularioEditar = this.fbo.group({
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
    this.titulo = 'Editar Organigrama'
    if(this.id !== null){
      this._organigramaService.getOrganigramaEdit(this.id).subscribe(data =>{
        this.FormularioEditar.setValue({
          ruta: data.payload.data()['Dir']
        })
      })
    }
  }
  editarOrganigrama(){
    const organigrama: any = {
      Dir: this.FormularioEditar.value.ruta
    }
    this._organigramaService.actualizarOrganigrama(this.id, organigrama).then(()=>{
      console.log('Organigrama Actualizado')
    })
    this.router.navigate(['/admin-organigrama']);
  }


}

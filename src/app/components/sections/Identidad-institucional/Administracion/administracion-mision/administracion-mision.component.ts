import { MisionService } from './../../../../../services/firebase/Identidad-institucional/Mision/mision.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-administracion-mision',
  templateUrl: './administracion-mision.component.html',
  styleUrls: ['./administracion-mision.component.css']
})
export class AdministracionMisionComponent implements OnInit {

  contends_mision: any[]=[];
  documents_mision: Observable<any[]>

  ingresarMision: FormGroup;
  ingresarDocumento: FormGroup;
  submitedMision = false;
  submitedDocumento = false;


  constructor(firestore: AngularFirestore, private fbm: FormBuilder,
    private _misionService: MisionService, private fbd: FormBuilder,
    ) {

   this.documents_mision = firestore.collection('/Identidad/Mision/MisionDocumentos').valueChanges();


    this.ingresarMision = this.fbm.group({
      titulo_mision:['', Validators.required],
      contenido_mision:['',Validators.required]

    })

    this.ingresarDocumento = this.fbd.group({
      Dir_Documento:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getContenido_Mision()
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
  agregarMision(){

    this.submitedMision = true;

    if(this.ingresarMision.invalid){
      return;
    }
    const mision_contenido: any ={
      Titulo:this.ingresarMision.value.titulo_mision,
      contenido: this.ingresarMision.value.contenido_mision
    }
    this._misionService.agregarMision(mision_contenido).then(()=>{
      console.log('mision agregada');
    }).catch(error=>{
      console.log(error)
    })
  }

  agregarDocumento(){

    this.submitedDocumento = true;

    if(this.ingresarDocumento.invalid){
      return;
    }
    const documento: any = {
      Dir_Documento: this.ingresarDocumento.value.Dir_Documento
    }
    this._misionService.agregarDocumento(documento).then(()=>{
      console.log('documento ingresado');
    }).catch(error=>{
      console.log(error)
    })

  }
  getContenido_Mision(){
    this._misionService.getContenido_Mision().subscribe(data =>{
      this.contends_mision = [];
       data.forEach((element:any) => {

         this.contends_mision.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.contends_mision);
    });
  }
  eliminarContenido_Mision(id: string){
    this._misionService.eliminarContenido_Mision(id).then(()=>{
      console.log('CONTENIO Mision ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }


}

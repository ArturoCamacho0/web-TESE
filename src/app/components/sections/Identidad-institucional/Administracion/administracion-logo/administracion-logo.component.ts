import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoService } from 'src/app/services/firebase/Identidad-institucional/Logo/logo.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-administracion-logo',
  templateUrl: './administracion-logo.component.html',
  styleUrls: ['./administracion-logo.component.css']
})
export class AdministracionLogoComponent implements OnInit {

  //LOGO
 ingresarContentLogo: FormGroup;

 submittedContLogo = false;


 titles_logo: any[] = [];
 imgs_logo:any[] = [];



 contenido_logo: any[] = [];
  constructor(firestore: AngularFirestore, private fblogo : FormBuilder,
    private _logoService: LogoService, private router:Router,
    private aRoute: ActivatedRoute, private fbtitl : FormBuilder) {

      //LOGO
    this.ingresarContentLogo = this.fblogo.group({
      id_logo:['',Validators.required],
      contenido_logo:['', Validators.required]

    })
    }




  ngOnInit(): void {
    this.getContenido_Logo()
    this.getTitulos()
    this.getImagen()
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
  agregarContenido(){

    this.submittedContLogo = true;
    if(this.ingresarContentLogo.invalid){
      return;
    }
    const logo: any = {
      id_logo:this.ingresarContentLogo.value.id_logo,
      contenido:this.ingresarContentLogo.value.contenido_logo
    }
    this._logoService.agregarContenido(logo).then(()=>{
      console.log('contenido agregado');

    }).catch(error =>{
      console.log(error);
    }
    )
  }

  getContenido_Logo(){
    this._logoService.getContenido_Logo().subscribe(data =>{
      this.contenido_logo = [];
       data.forEach((element:any) => {

         this.contenido_logo.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.contenido_logo);
    });
  }
  eliminarContenido_Logo(id: string){
    this._logoService.eliminarContenido_Logo(id).then(()=>{
      console.log('CONTENIO ELIMINADO');
    }).catch(error =>{
      console.log(error
       )
    })
  }



  getTitulos(){
    this._logoService.getTitulos().subscribe(data =>{
      this.titles_logo = [];
       data.forEach((element:any) => {

         this.titles_logo.push({
           id:element.payload.doc.id,

           ...element.payload.doc.data()
         })

       });
       console.log(this.titles_logo);
    });
  }



  getImagen(){
    this._logoService.getImagen().subscribe(data =>{
      this.imgs_logo = [];
       data.forEach((element:any) => {

         this.imgs_logo.push({
           id:element.payload.doc.id,
           ...element.payload.doc.data()
         })

       });
       console.log(this.imgs_logo);
    });
  }



}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-mquimica',
  templateUrl: './control-mquimica.component.html',
  styleUrls: ['./control-mquimica.component.css']
})
export class ControlMquimicaComponent implements OnInit {

  createConcepto: FormGroup;
  submitted = false;

  constructor(private fbc: FormBuilder) {
    this.createConcepto=this.fbc.group({
      ConceptosMQuimica:['', Validators.required],
      ConceptosMQuimicaDesc:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarConcepto(){
    this.submitted = true;

    if(this.createConcepto.invalid){
      return;
    }
    const conceptoQuimica: any = {
      ConceptosMQuimica: this.createConcepto.value.ConceptosMQuimica,
      ConceptosMQuimicaDesc: this.createConcepto.value.ConceptosMQuimicaDesc
    }
    console.log(conceptoQuimica)
  }

}

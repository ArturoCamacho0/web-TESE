import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { BannerPComponent } from './banner-p/banner-p.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlantillaContenidoComponent } from './plantilla-contenido/plantilla-contenido.component';
import { AdmisionytramitesComponent } from './admisionytramites/admisionytramites.component';
import { InscripcionComponent } from './admisionytramites/inscripcion/inscripcion.component';
import { ReinscripcionComponent } from './admisionytramites/reinscripcion/reinscripcion.component';
import { BecasComponent } from './admisionytramites/becas/becas.component';
import { CursosComponent } from './admisionytramites/cursos/cursos.component';
import { TitulacionComponent } from './admisionytramites/titulacion/titulacion.component';
import { ServiciosocialComponent } from './admisionytramites/serviciosocial/serviciosocial.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerPComponent,
    CarouselComponent,
    PlantillaContenidoComponent,
    AdmisionytramitesComponent,
    InscripcionComponent,
    ReinscripcionComponent,
    BecasComponent,
    CursosComponent,
    TitulacionComponent,
    ServiciosocialComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    CarouselComponent
  ]
})
export class SectionsModule { }

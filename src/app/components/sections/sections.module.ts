import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { BannerPComponent } from './banner-p/banner-p.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlantillaContenidoComponent } from './plantilla-contenido/plantilla-contenido.component';
import { AdmisionytramitesComponent } from './admisionytramites/admisionytramites.component';
import { InscripcionComponent } from './admisionytramites/inscripcion/inscripcion.component';
import { HistoriaComponent } from './Identidad-institucional/historia/historia.component';
import { LogoComponent } from './Identidad-institucional/logo/logo.component';
import { MisionVisionComponent } from './Identidad-institucional/mision-vision/mision-vision.component';
import { NormatividadComponent } from './normatividad/normatividad.component';
import { CalendarioEscolarComponent } from './normatividad/calendario-escolar/calendario-escolar.component';
import { PoliticaIntegralComponent } from './normatividad/politica-integral/politica-integral.component';
import { CompromisoSocialComponent } from './normatividad/compromiso-social/compromiso-social.component';
import { ContraloriaSocialComponent } from './normatividad/contraloria-social/contraloria-social.component';
import { InformeActividadesComponent } from './normatividad/informe-actividades/informe-actividades.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerPComponent,
    CarouselComponent,
    PlantillaContenidoComponent,
    AdmisionytramitesComponent,
    InscripcionComponent,
    HistoriaComponent,
    LogoComponent,
    MisionVisionComponent,


    NormatividadComponent,
    CalendarioEscolarComponent,
    PoliticaIntegralComponent,
    CompromisoSocialComponent,
    ContraloriaSocialComponent,
    InformeActividadesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    CarouselComponent,
    
  ]
})
export class SectionsModule { }

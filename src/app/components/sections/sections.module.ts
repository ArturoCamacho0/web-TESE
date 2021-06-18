import { routing, appRoutingProviders } from './../../app.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { BannerPComponent } from './banner-p/banner-p.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PaginaEgresadosComponent } from './EGRESADOS-EXALUMNOS/pagina-egresados/pagina-egresados.component';
import { BannerEgresadosComponent } from './EGRESADOS-EXALUMNOS/banner-egresados/banner-egresados.component';
import { BannerMquimicaComponent } from './EGRESADOS-EXALUMNOS/Mquimica/banner-mquimica/banner-mquimica.component';
import { PaginaMquimicaComponent } from './EGRESADOS-EXALUMNOS/Mquimica/pagina-mquimica/pagina-mquimica.component';
import { BannerMbioquimicaComponent } from './EGRESADOS-EXALUMNOS/Mbioquimica/banner-mbioquimica/banner-mbioquimica.component';
import { PaginaMbioquimicaComponent } from './EGRESADOS-EXALUMNOS/Mbioquimica/pagina-mbioquimica/pagina-mbioquimica.component';
import { BannerSistemasComponent } from './EGRESADOS-EXALUMNOS/MSistemas/banner-sistemas/banner-sistemas.component';
import { PaginaMsistemasComponent } from './EGRESADOS-EXALUMNOS/MSistemas/pagina-msistemas/pagina-msistemas.component';
import { BannerMeficienciaComponent } from './EGRESADOS-EXALUMNOS/Meficiencia/banner-meficiencia/banner-meficiencia.component';
import { PaginaMeficienciaComponent } from './EGRESADOS-EXALUMNOS/Meficiencia/pagina-meficiencia/pagina-meficiencia.component';
import { BannerMmecatronicaComponent } from './EGRESADOS-EXALUMNOS/Mmecatronica/banner-mmecatronica/banner-mmecatronica.component';
import { PaginaMmecatronicaComponent } from './EGRESADOS-EXALUMNOS/Mmecatronica/pagina-mmecatronica/pagina-mmecatronica.component';
import { BannerMgestionComponent } from './EGRESADOS-EXALUMNOS/Mgestion/banner-mgestion/banner-mgestion.component';
import { PaginaMgestionComponent } from './EGRESADOS-EXALUMNOS/Mgestion/pagina-mgestion/pagina-mgestion.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerPComponent,
    CarouselComponent,
    PaginaEgresadosComponent,
    BannerEgresadosComponent,
    BannerMquimicaComponent,
    PaginaMquimicaComponent,
    BannerMbioquimicaComponent,
    PaginaMbioquimicaComponent,
    BannerSistemasComponent,
    PaginaMsistemasComponent,
    BannerMeficienciaComponent,
    PaginaMeficienciaComponent,
    BannerMmecatronicaComponent,
    PaginaMmecatronicaComponent,
    BannerMgestionComponent,
    PaginaMgestionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    appRoutingProviders
  ],

  providers :[
    appRoutingProviders
  ],
  exports: [
    HomeComponent,
    CarouselComponent
  ]
})
export class SectionsModule { }

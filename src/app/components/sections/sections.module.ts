import { routing, appRoutingProviders } from './../../app.routing';
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

import { CarouselCarrerasComponent } from './carrera/carousel-carreras/carousel-carreras.component';
import { CuerpoComponent } from './carrera/cuerpo/cuerpo.component';
import { MenuComponent } from './carrera/menu/menu.component';
import { CarouselSistemasComponent } from './carrera/profesion/SistemasComputacionales/carousel-sistemas/carousel-sistemas.component';
import { CuerpoSistemasComponent } from './carrera/profesion/SistemasComputacionales/cuerpo-sistemas/cuerpo-sistemas.component';
import { CarouselContadorComponent } from './carrera/profesion/ContadorPublico/carousel-contador/carousel-contador.component';
import { CuerpoContadorComponent } from './carrera/profesion/ContadorPublico/cuerpo-contador/cuerpo-contador.component';
import { CarouselAeronauticaComponent } from './carrera/profesion/IngenieriaAeronautica/carousel-aeronautica/carousel-aeronautica.component';
import { CuerpoAeronauticaComponent } from './carrera/profesion/IngenieriaAeronautica/cuerpo-aeronautica/cuerpo-aeronautica.component';
import { CuerpoBioquimicaComponent } from './carrera/profesion/IngenieriaBioquimica/cuerpo-bioquimica/cuerpo-bioquimica.component';
import { CarouselBioquimicaComponent } from './carrera/profesion/IngenieriaBioquimica/carousel-bioquimica/carousel-bioquimica.component';
import { CarouselElectronicaComponent } from './carrera/profesion/IngenieriaElectronica/carousel-electronica/carousel-electronica.component';
import { CuerpoElectronicaComponent } from './carrera/profesion/IngenieriaElectronica/cuerpo-electronica/cuerpo-electronica.component';
import { CuerpoGestionComponent } from './carrera/profesion/GestionEmpresarial/cuerpo-gestion/cuerpo-gestion.component';
import { CarouselGestionComponent } from './carrera/profesion/GestionEmpresarial/carousel-gestion/carousel-gestion.component';
import { CarouselIndustrialComponent } from './carrera/profesion/IngenieriaIndustrial/carousel-industrial/carousel-industrial.component';
import { CuerpoIndustrialComponent } from './carrera/profesion/IngenieriaIndustrial/cuerpo-industrial/cuerpo-industrial.component';
import { CuerpoInformaticaComponent } from './carrera/profesion/IngenieriaInformatica/cuerpo-informatica/cuerpo-informatica.component';
import { CarouselInformaticaComponent } from './carrera/profesion/IngenieriaInformatica/carousel-informatica/carousel-informatica.component';
import { CarouselMecanicaComponent } from './carrera/profesion/IngenieriaMecanica/carousel-mecanica/carousel-mecanica.component';
import { CuerpoMecanicaComponent } from './carrera/profesion/IngenieriaMecanica/cuerpo-mecanica/cuerpo-mecanica.component';
import { CuerpoMecatronicaComponent } from './carrera/profesion/IngenieriaMecatronica/cuerpo-mecatronica/cuerpo-mecatronica.component';
import { CarouselMecatronicaComponent } from './carrera/profesion/IngenieriaMecatronica/carousel-mecatronica/carousel-mecatronica.component';
import { CarouselQuimicaComponent } from './carrera/profesion/IngenieriaQuimica/carousel-quimica/carousel-quimica.component';
import { CuerpoQuimicaComponent } from './carrera/profesion/IngenieriaQuimica/cuerpo-quimica/cuerpo-quimica.component';
import { AdministracionLogoComponent } from './Identidad-institucional/Administracion/administracion-logo/administracion-logo.component';
import { AdministracionHistoriaComponent } from './Identidad-institucional/Administracion/administracion-historia/administracion-historia.component';
import { AdministracionMisionComponent } from './Identidad-institucional/Administracion/administracion-mision/administracion-mision.component';
import { AdministracionOrganigramaComponent } from './Identidad-institucional/Administracion/administracion-organigrama/administracion-organigrama.component';
import { ImgLogoComponent } from './Identidad-institucional/Administracion/administracion-logo/Edit/img-logo/img-logo.component';
import { AdministracionInscripcionComponent } from './admisionytramites/admin/administracion-inscripcion/administracion-inscripcion.component';
import { AdministracionReinscripcionComponent } from './admisionytramites/admin/administracion-reinscripcion/administracion-reinscripcion/administracion-reinscripcion.component';


import { ReinscripcionComponent } from './admisionytramites/reinscripcion/reinscripcion.component';




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
    InformeActividadesComponent,

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
    PaginaMgestionComponent,
    CarouselCarrerasComponent,
    CuerpoComponent,
    MenuComponent,
    CarouselSistemasComponent,
    CuerpoSistemasComponent,
    CarouselContadorComponent,
    CuerpoContadorComponent,
    CarouselAeronauticaComponent,
    CuerpoAeronauticaComponent,
    CuerpoBioquimicaComponent,
    CarouselBioquimicaComponent,
    CarouselElectronicaComponent,
    CuerpoElectronicaComponent,
    CuerpoGestionComponent,
    CarouselGestionComponent,
    CarouselIndustrialComponent,
    CuerpoIndustrialComponent,
    CuerpoInformaticaComponent,
    CarouselInformaticaComponent,
    CarouselMecanicaComponent,
    CuerpoMecanicaComponent,
    CuerpoMecatronicaComponent,
    CarouselMecatronicaComponent,
    CarouselQuimicaComponent,
    CuerpoQuimicaComponent,
    AdministracionLogoComponent,
    AdministracionHistoriaComponent,
    AdministracionMisionComponent,
    AdministracionOrganigramaComponent,
    ImgLogoComponent,
    AdministracionInscripcionComponent,
    AdministracionReinscripcionComponent,
ReinscripcionComponent





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
    CarouselComponent,

  ]
})
export class SectionsModule { }

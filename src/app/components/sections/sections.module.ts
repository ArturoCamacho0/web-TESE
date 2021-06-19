import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { BannerPComponent } from './banner-p/banner-p.component';
import { CarouselComponent } from './carousel/carousel.component';
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

@NgModule({
  declarations: [
    HomeComponent,
    BannerPComponent,
    CarouselComponent,
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
    CuerpoQuimicaComponent
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

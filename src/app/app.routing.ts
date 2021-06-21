
import { MisionVisionComponent } from './components/sections/Identidad-institucional/mision-vision/mision-vision.component';
import { HistoriaComponent } from './components/sections/Identidad-institucional/historia/historia.component';
import { LogoComponent } from './components/sections/Identidad-institucional/logo/logo.component';
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { PlantillaContenidoComponent } from './components/sections/plantilla-contenido/plantilla-contenido.component';
import {AdmisionytramitesComponent} from './components/sections/admisionytramites/admisionytramites.component';
import { InscripcionComponent } from './components/sections/admisionytramites/inscripcion/inscripcion.component';

import {NormatividadComponent} from './components/sections/normatividad/normatividad.component';
import {CalendarioEscolarComponent} from './components/sections/normatividad/calendario-escolar/calendario-escolar.component';
import { CompromisoSocialComponent } from './components/sections/normatividad/compromiso-social/compromiso-social.component';
import {PoliticaIntegralComponent} from './components/sections/normatividad/politica-integral/politica-integral.component';
import {ContraloriaSocialComponent} from './components/sections/normatividad/contraloria-social/contraloria-social.component'
import {InformeActividadesComponent} from './components/sections/normatividad/informe-actividades/informe-actividades.component';
import { PaginaEgresadosComponent } from './components/sections/EGRESADOS-EXALUMNOS/pagina-egresados/pagina-egresados.component';
import { PaginaMquimicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mquimica/pagina-mquimica/pagina-mquimica.component';
import { PaginaMbioquimicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mbioquimica/pagina-mbioquimica/pagina-mbioquimica.component';
import { PaginaMsistemasComponent } from './components/sections/EGRESADOS-EXALUMNOS/MSistemas/pagina-msistemas/pagina-msistemas.component';
import { PaginaMeficienciaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Meficiencia/pagina-meficiencia/pagina-meficiencia.component';
import { PaginaMmecatronicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mmecatronica/pagina-mmecatronica/pagina-mmecatronica.component';
import { PaginaMgestionComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mgestion/pagina-mgestion/pagina-mgestion.component';

//import carreras
import { CuerpoComponent } from './components/sections/carrera/cuerpo/cuerpo.component';
import { CuerpoSistemasComponent } from './components/sections/carrera/profesion/SistemasComputacionales/cuerpo-sistemas/cuerpo-sistemas.component';

import { PlantillaContenidoComponent } from './components/sections/plantilla-contenido/plantilla-contenido.component'


// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'egresadosyexalumnos', component: PaginaEgresadosComponent },
    { path: 'Mquimica', component: PaginaMquimicaComponent},
    { path: 'Mbioquimica', component: PaginaMbioquimicaComponent},
    { path: 'Msistemas', component: PaginaMsistemasComponent},
    { path: 'Meficienciaenergetica', component: PaginaMeficienciaComponent},
    { path: 'Mmecatronica', component: PaginaMmecatronicaComponent},
    { path: 'Mgestion', component:PaginaMgestionComponent},
    { path: 'Carreras', component: CuerpoComponent},
    { path:'Carreras/Sistemas', component: CuerpoSistemasComponent},

{path: 'inscripcion', component:InscripcionComponent },
{path:'admisionytramites',component:AdmisionytramitesComponent},
    { path: 'Logo', component:LogoComponent},
    { path: 'Historia', component:HistoriaComponent},
    { path: 'Mision', component:MisionVisionComponent},

    { path: 'normatividad', component: NormatividadComponent},
    { path: 'calendario', component: CalendarioEscolarComponent},
    {path: 'compromiso', component: CompromisoSocialComponent},
    {path: 'politica', component: PoliticaIntegralComponent},
    {path: 'contraloria', component: ContraloriaSocialComponent},
    {path: 'informe', component: InformeActividadesComponent}


    { path: 'plantillacontenido', component:PlantillaContenidoComponent },

];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

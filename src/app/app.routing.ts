import { ImgLogoComponent } from './components/sections/Identidad-institucional/Administracion/administracion-logo/Edit/img-logo/img-logo.component';
import { AdministracionOrganigramaComponent } from './components/sections/Identidad-institucional/Administracion/administracion-organigrama/administracion-organigrama.component';
import { AdministracionMisionComponent } from './components/sections/Identidad-institucional/Administracion/administracion-mision/administracion-mision.component';
import { AdministracionLogoComponent } from './components/sections/Identidad-institucional/Administracion/administracion-logo/administracion-logo.component';

import { MisionVisionComponent } from './components/sections/Identidad-institucional/mision-vision/mision-vision.component';
import { HistoriaComponent } from './components/sections/Identidad-institucional/historia/historia.component';
import { LogoComponent } from './components/sections/Identidad-institucional/logo/logo.component';
import { ModuleWithProviders, Component } from '@angular/core';
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

//EGRESADOS Y EXALUMNOS
import { PaginaEgresadosComponent } from './components/sections/EGRESADOS-EXALUMNOS/pagina-egresados/pagina-egresados.component';
import { PaginaMquimicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mquimica/pagina-mquimica/pagina-mquimica.component';
import { PaginaMbioquimicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mbioquimica/pagina-mbioquimica/pagina-mbioquimica.component';
import { PaginaMsistemasComponent } from './components/sections/EGRESADOS-EXALUMNOS/MSistemas/pagina-msistemas/pagina-msistemas.component';
import { PaginaMeficienciaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Meficiencia/pagina-meficiencia/pagina-meficiencia.component';
import { PaginaMmecatronicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mmecatronica/pagina-mmecatronica/pagina-mmecatronica.component';
import { PaginaMgestionComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mgestion/pagina-mgestion/pagina-mgestion.component';
import { ControlEgresadosComponent } from './components/sections/EGRESADOS-EXALUMNOS/ControlEgresados/control-egresados/control-egresados.component';
import { ControlMquimicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/ControlEgresados/control-mquimica/control-mquimica.component';
import { ControlMbioquimicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/ControlEgresados/control-mbioquimica/control-mbioquimica.component';
import { ControlMsistemasComponent } from './components/sections/EGRESADOS-EXALUMNOS/ControlEgresados/control-msistemas/control-msistemas.component';
import { ControlMeficienciaComponent } from './components/sections/EGRESADOS-EXALUMNOS/ControlEgresados/control-meficiencia/control-meficiencia.component';


//import carreras
import { CuerpoComponent } from './components/sections/carrera/cuerpo/cuerpo.component';
import { CuerpoSistemasComponent } from './components/sections/carrera/profesion/SistemasComputacionales/cuerpo-sistemas/cuerpo-sistemas.component';
import { CuerpoInformaticaComponent } from './components/sections/carrera/profesion/IngenieriaInformatica/cuerpo-informatica/cuerpo-informatica.component';
import { CuerpoElectronicaComponent } from './components/sections/carrera/profesion/IngenieriaElectronica/cuerpo-electronica/cuerpo-electronica.component';
import { CuerpoContadorComponent } from './components/sections/carrera/profesion/ContadorPublico/cuerpo-contador/cuerpo-contador.component';
import { CuerpoGestionComponent } from './components/sections/carrera/profesion/GestionEmpresarial/cuerpo-gestion/cuerpo-gestion.component';
import { CuerpoAeronauticaComponent } from './components/sections/carrera/profesion/IngenieriaAeronautica/cuerpo-aeronautica/cuerpo-aeronautica.component';
import { CuerpoBioquimicaComponent } from './components/sections/carrera/profesion/IngenieriaBioquimica/cuerpo-bioquimica/cuerpo-bioquimica.component';
import { CuerpoIndustrialComponent } from './components/sections/carrera/profesion/IngenieriaIndustrial/cuerpo-industrial/cuerpo-industrial.component';
import { CuerpoMecanicaComponent } from './components/sections/carrera/profesion/IngenieriaMecanica/cuerpo-mecanica/cuerpo-mecanica.component';
import { CuerpoMecatronicaComponent } from './components/sections/carrera/profesion/IngenieriaMecatronica/cuerpo-mecatronica/cuerpo-mecatronica.component';
import { CuerpoQuimicaComponent } from './components/sections/carrera/profesion/IngenieriaQuimica/cuerpo-quimica/cuerpo-quimica.component';

import { CarreraPrincipalComponent } from './components/sections/carrera/Administracion-Carreras/carrera-principal/carrera-principal.component';
import { AeronauticaComponent } from './components/sections/carrera/Administracion-Carreras/aeronautica/aeronautica.component';
import { BioquimicaComponent } from './components/sections/carrera/Administracion-Carreras/bioquimica/bioquimica.component';
import { ContadorPublicoComponent } from './components/sections/carrera/Administracion-Carreras/contador-publico/contador-publico.component';
import { ElectronicaComponent } from './components/sections/carrera/Administracion-Carreras/electronica/electronica.component';
import { GestionEmpresarialComponent } from './components/sections/carrera/Administracion-Carreras/gestion-empresarial/gestion-empresarial.component';
import { IndustrialComponent } from './components/sections/carrera/Administracion-Carreras/industrial/industrial.component';
import { InformaticaComponent } from './components/sections/carrera/Administracion-Carreras/informatica/informatica.component';
import { MecanicaComponent } from './components/sections/carrera/Administracion-Carreras/mecanica/mecanica.component';
import { MecatronicaComponent } from './components/sections/carrera/Administracion-Carreras/mecatronica/mecatronica.component';
import { QuimicaComponent } from './components/sections/carrera/Administracion-Carreras/quimica/quimica.component';
import { SistemasComputacionalesComponent } from './components/sections/carrera/Administracion-Carreras/sistemas-computacionales/sistemas-computacionales.component';

import { ContactoComponent } from './components/layout/contacto/contacto.component';
import { AdministracionHistoriaComponent } from './components/sections/Identidad-institucional/Administracion/administracion-historia/administracion-historia.component';

// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
   //EGRESADOS
    { path: 'egresadosyexalumnos', component: PaginaEgresadosComponent },
    { path: 'Mquimica', component: PaginaMquimicaComponent},
    { path: 'Mbioquimica', component: PaginaMbioquimicaComponent},
    { path: 'Msistemas', component: PaginaMsistemasComponent},
    { path: 'Meficienciaenergetica', component: PaginaMeficienciaComponent},
    { path: 'Mmecatronica', component: PaginaMmecatronicaComponent},
    { path: 'Mgestion', component:PaginaMgestionComponent},
    { path: 'ControlEgresados', component:ControlEgresadosComponent},
    { path: 'ControlMquimica', component:ControlMquimicaComponent},
    { path: 'ControlMbioquimica', component:ControlMbioquimicaComponent},
    { path: 'ControlMsistemas', component:ControlMsistemasComponent},
    { path: 'ControlMeficiencia', component:ControlMeficienciaComponent},


    { path: 'Carreras', component: CuerpoComponent},
    { path:'Carreras/Sistemas', component: CuerpoSistemasComponent},
    { path:'Carreras', component: CuerpoComponent},
    { path:'Carreras/Sistemas', component: CuerpoSistemasComponent},
    { path:'Carreras/Informatica', component: CuerpoInformaticaComponent},
    { path:'Carreras/Electronica',component: CuerpoElectronicaComponent},
    { path:'Carreras/Contador',component: CuerpoContadorComponent},
    { path:'Carreras/Gestion',component: CuerpoGestionComponent},
    { path:'Carreras/Aeronautica',component: CuerpoAeronauticaComponent},
    { path:'Carreras/Bioquimica',component: CuerpoBioquimicaComponent},
    { path:'Carreras/Industrial',component: CuerpoIndustrialComponent},
    { path:'Carreras/Mecanica',component: CuerpoMecanicaComponent},
    { path:'Carreras/Mecatronica',component: CuerpoMecatronicaComponent},
    { path:'Carreras/Quimica',component: CuerpoQuimicaComponent},
    {path:'Admin-Carrera',component: CarreraPrincipalComponent},
    {path:'Admin-Carrera/Aeronautica',component: AeronauticaComponent},
    {path:'Admin-Carrera/Bioquimica',component: BioquimicaComponent},
    {path:'Admin-Carrera/ContadorPublico',component: ContadorPublicoComponent},
    {path:'Admin-Carrera/Electronica',component: ElectronicaComponent},
    {path:'Admin-Carrera/Gestion',component: GestionEmpresarialComponent},
    {path:'Admin-Carrera/Industrial',component: IndustrialComponent},
    {path:'Admin-Carrera/Informatica',component: InformaticaComponent},
    {path:'Admin-Carrera/Mecanica',component: MecanicaComponent},
    {path:'Admin-Carrera/Mecatronica',component: MecatronicaComponent},
    {path:'Admin-Carrera/Quimica',component: QuimicaComponent},
    {path:'Admin-Carrera/Sistemas',component: SistemasComputacionalesComponent},

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
    {path: 'informe', component: InformeActividadesComponent},


    { path: 'plantillacontenido', component:PlantillaContenidoComponent },
    { path: 'contact', component: ContactoComponent },
    { path: 'admin-logo', component: AdministracionLogoComponent},
    { path: 'admin-historia', component: AdministracionHistoriaComponent},
    { path: 'admin-mision', component: AdministracionMisionComponent},
    { path: 'admin-organigrama', component: AdministracionOrganigramaComponent},
    { path: 'edit-img-logo/:id', component: ImgLogoComponent}





];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

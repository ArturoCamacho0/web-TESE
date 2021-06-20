import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';

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

// Rutas
const appRoutes: Routes = [
    { path:'', component: HomeComponent },
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
    { path:'Carreras/Quimica',component: CuerpoQuimicaComponent}
  ];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

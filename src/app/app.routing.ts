import { OrganigramaComponent } from './components/sections/Identidad-institucional/organigrama/organigrama.component';
import { MisionVisionComponent } from './components/sections/Identidad-institucional/mision-vision/mision-vision.component';
import { HistoriaComponent } from './components/sections/Identidad-institucional/historia/historia.component';
import { LogoComponent } from './components/sections/Identidad-institucional/logo/logo.component';
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { PlantillaContenidoComponent } from './components/sections/plantilla-contenido/plantilla-contenido.component';
import {AdmisionytramitesComponent} from './components/sections/admisionytramites/admisionytramites.component';
import { InscripcionComponent } from './components/sections/admisionytramites/inscripcion/inscripcion.component';

// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'plantillacontenido', component:PlantillaContenidoComponent },

{path: 'inscripcion', component:InscripcionComponent },
{path:'admisionytramites',component:AdmisionytramitesComponent},
    { path: 'Logo', component:LogoComponent},
    { path: 'Historia', component:HistoriaComponent},
    { path: 'Mision', component:MisionVisionComponent},
    { path: 'Organigrama', component:OrganigramaComponent}
];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

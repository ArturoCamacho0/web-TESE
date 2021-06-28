import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { PlantillaContenidoComponent } from './components/sections/plantilla-contenido/plantilla-contenido.component';
import {AdmisionytramitesComponent} from './components/sections/admisionytramites/admisionytramites.component';
import { InscripcionComponent } from './components/sections/admisionytramites/inscripcion/inscripcion.component';
import {ReinscripcionComponent} from './components/sections/admisionytramites/reinscripcion/reinscripcion.component';
import {BecasComponent} from './components/sections/admisionytramites/becas/becas.component';

import { CursosComponent } from './components/sections/admisionytramites/cursos/cursos.component';
import {TitulacionComponent} from './components/sections/admisionytramites/titulacion/titulacion.component';

import {ServiciosocialComponent} from './components/sections/admisionytramites/serviciosocial/serviciosocial.component';

import { AdminComponent } from './components/sections/admin/admin.component';

// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'plantillacontenido', component:PlantillaContenidoComponent },
{path: 'inscripcion', component:InscripcionComponent },
{path:'admisionytramites',component:AdmisionytramitesComponent},
{path:'reinscripcion',component:ReinscripcionComponent},
{path:'becas',component:BecasComponent},
{path:'cursos',component:CursosComponent},
{path:'titulacion',component:TitulacionComponent},
{path:'serviciosocial',component:ServiciosocialComponent},
{path:'admisionytramites',component:AdmisionytramitesComponent},
{path:'admin',component:AdminComponent}
];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

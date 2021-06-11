import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { IdentidadInstitucionalComponent } from './components/sections/identidad-institucional/identidad-institucional.component';
import { HistoriaComponent } from './components/sections/identidad-institucional/Historia/Historia.component';
import { LogoComponent } from './components/sections/identidad-institucional/Logo/Logo.component';
import { MisionVisionComponent } from './components/sections/identidad-institucional/mision-vision/mision-vision.component';
import { OrganigramaComponent } from './components/sections/identidad-institucional/Organigrama/Organigrama.component';
// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Identidad', component: IdentidadInstitucionalComponent },
    { path: 'Historia', component: HistoriaComponent },
    { path: 'Logo', component: LogoComponent },
    { path: 'Mision_Vision', component: MisionVisionComponent },
    { path: 'Organigrama', component: OrganigramaComponent },
];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders, Component } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { InscripcionComponent } from './components/sections/admisionytramites/inscripcion/inscripcion.component';
// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inscripcion', component: InscripcionComponent }
];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

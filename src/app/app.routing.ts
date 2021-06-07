import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { ContactoComponent } from './components/sections/contacto/contacto.component';

// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent }
];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
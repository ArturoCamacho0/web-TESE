import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';

//import carreras
import { CuerpoComponent } from './components/sections/carrera/cuerpo/cuerpo.component';
import { CuerpoSistemasComponent } from './components/sections/carrera/profesion/SistemasComputacionales/cuerpo-sistemas/cuerpo-sistemas.component';


// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Carreras', component: CuerpoComponent},
    { path:'Carreras/Sistemas', component: CuerpoSistemasComponent}

];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

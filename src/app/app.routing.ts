import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
// Rutas
const appRoutes: Routes = [
    
];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
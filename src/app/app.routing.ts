import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { PlantillaContenidoComponent } from './components/sections/plantilla-contenido/plantilla-contenido.component'
import {NormatividadComponent} from './components/sections/normatividad/normatividad.component';
import {CalendarioEscolarComponent} from './components/sections/normatividad/calendario-escolar/calendario-escolar.component';
import { CompromisoSocialComponent } from './components/sections/normatividad/compromiso-social/compromiso-social.component';
import {PoliticaIntegralComponent} from './components/sections/normatividad/politica-integral/politica-integral.component';
import {ContraloriaSocialComponent} from './components/sections/normatividad/contraloria-social/contraloria-social.component'
import {InformeActividadesComponent} from './components/sections/normatividad/informe-actividades/informe-actividades.component';
// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'plantillacontenido', component: PlantillaContenidoComponent},
    { path: 'normatividad', component: NormatividadComponent},
    { path: 'calendario', component: CalendarioEscolarComponent},
    {path: 'compromiso', component: CompromisoSocialComponent},
    {path: 'politica', component: PoliticaIntegralComponent},
    {path: 'contraloria', component: ContraloriaSocialComponent},
    {path: 'informe', component: InformeActividadesComponent}


];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

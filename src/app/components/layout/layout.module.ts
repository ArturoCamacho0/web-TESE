import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing, appRoutingProviders } from '../../app.routing';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionsModule } from '../sections/sections.module';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SectionsModule,
    routing,
    appRoutingProviders
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactoComponent
  ]
})
export class LayoutModule { }

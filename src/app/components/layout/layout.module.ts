import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing, appRoutingProviders } from '../../app.routing';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    appRoutingProviders
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent
  ]
})
export class LayoutModule { }

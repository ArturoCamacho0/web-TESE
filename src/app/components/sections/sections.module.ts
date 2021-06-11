import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './identidad-institucional/Logo/Logo.component';
import { IdentidadInstitucionalComponent } from './identidad-institucional/identidad-institucional.component';
import { MisionVisionComponent } from './identidad-institucional/mision-vision/mision-vision.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    IdentidadInstitucionalComponent,
    LogoComponent,
    MisionVisionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class SectionsModule { }

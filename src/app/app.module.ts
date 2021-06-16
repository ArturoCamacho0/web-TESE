import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing'
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { LayoutModule } from './components/layout/layout.module';
import { SectionsModule } from './components/sections/sections.module';
import { ContactoComponent } from './components/layout/contacto/contacto.component';

const router: Routes =[
  {
    path: 'contacto',
    component: ContactoComponent
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    appRoutingProviders,
    BrowserAnimationsModule,

    MaterialModule,

    LayoutModule,
    SectionsModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

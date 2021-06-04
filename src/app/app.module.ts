import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { LayoutModule } from './components/layout/layout.module';
import { SectionsModule } from './components/sections/sections.module';

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
    SectionsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

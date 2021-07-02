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
import { LoginComponent } from './components/layout/login/login.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

const router: Routes =[
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

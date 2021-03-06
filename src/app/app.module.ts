import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing'
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { LayoutModule } from './components/layout/layout.module';
import { ContactoComponent } from './components/layout/contacto/contacto.component';
import { LoginComponent } from './components/layout/login/login.component';
import { RegistroComponent } from './components/layout/registro/registro.component'

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { SectionsModule } from './components/sections/sections.module';

const router: Routes =[
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    routing,
    appRoutingProviders,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    SectionsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';

// RUTAS DE LA NAVEGACION
import {APP_ROUTING} from './app.routes';

//SERVICIOS
import {empresasService} from  './services/empresas.service';
import {ofertasService} from './services/ofertas.service';
import {AuthService} from './services/auth.service';


//COMPONENTES 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { PQRSComponent } from './components/pqrs/pqrs.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { LoginComponent } from './components/login/login.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { FooterComponent } from './components/footer/footer.component';
import { GestionarOfertaComponent } from './components/gestionar-oferta/gestionar-oferta.component';
import { GestionarEmpresasComponent } from './components/gestionar-empresas/gestionar-empresas.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormEmpComponent } from './components/product-form-emp/product-form-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    EmpresasComponent,
    OfertasComponent,
    PQRSComponent,
    ContactanosComponent,
    LoginComponent,
    OfertaComponent,
    RegistrarseComponent,
    FooterComponent,
    GestionarOfertaComponent,
    GestionarEmpresasComponent,
    ProductFormComponent,
    ProductFormEmpComponent  
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    ofertasService,
    empresasService,AngularFireAuth,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

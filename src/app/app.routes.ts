import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import {EmpresasComponent} from './components/empresas/empresas.component';
import {OfertasComponent} from './components/ofertas/ofertas.component';
import {ContactanosComponent} from './components/contactanos/contactanos.component';
import {PQRSComponent} from './components/pqrs/pqrs.component';
import {LoginComponent} from './components/login/login.component';
import {OfertaComponent}from './components/oferta/oferta.component';
import {RegistrarseComponent} from './components/registrarse/registrarse.component';
import {ProductFormComponent} from  './components/product-form/product-form.component';
import {ProductFormEmpComponent} from './components/product-form-emp/product-form-emp.component';
import { AuthGuard } from './guards/auth.guard';
 

const APP_ROUTES: Routes = [
  { path: 'Inicio', component:InicioComponent},  
  { path: 'Empresas', component:EmpresasComponent},
  { path: 'Ofertas', component:OfertasComponent},
  { path: 'Contactanos', component:ContactanosComponent},
  { path: 'PQRS', component:PQRSComponent,canActivate:[AuthGuard]},
  { path: 'Login', component:LoginComponent},
  { path: 'Registrate', component:RegistrarseComponent},
  { path: 'Oferta/:id', component:OfertaComponent},
  { path: 'Editar/:id', component:ProductFormComponent}, 
  { path: 'Eliminar/:id', component:ProductFormComponent}, 
  { path: 'Agregar/:id', component:ProductFormComponent},
  { path: 'Editare/:id', component:ProductFormEmpComponent}, 
  { path: 'Eliminare/:id', component:ProductFormEmpComponent}, 
  { path: 'Agregare/:id', component:ProductFormEmpComponent}, 
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }

];
 
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
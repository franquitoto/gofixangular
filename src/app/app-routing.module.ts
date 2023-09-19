import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LocalesComponent } from './pages/locales/locales.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { BackofficeComponent } from './pages/backoffice/backoffice.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'locales', component: LocalesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'detalle/:id', component: DetalleComponent },
  {path: 'backoffice', component: BackofficeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

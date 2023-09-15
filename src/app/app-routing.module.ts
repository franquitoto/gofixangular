import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { LocalesComponent } from './locales/locales.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'locales', component: LocalesComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

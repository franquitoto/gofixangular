import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SloganComponent } from './components/slogan/slogan.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LocalesComponent } from './pages/locales/locales.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { PopupCarritoComponent } from './components/popup-carrito/popup-carrito.component';
import { PopuCarritoDetalleComponent } from './components/popu-carrito-detalle/popu-carrito-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    BannerComponent,
    SloganComponent,
    InicioComponent,
    ProductosComponent,
    LocalesComponent,
    ContactoComponent,
    FooterComponent,
    ProductoComponent,
    DetalleComponent,
    PopupCarritoComponent,
    PopuCarritoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

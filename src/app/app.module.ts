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
import { PopupLoginComponent } from './components/popup-login/popup-login.component';
import { BackofficeComponent } from './pages/backoffice/backoffice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ModalNavbarComponent } from './components/modal-navbar/modal-navbar.component';
import { FiltroComponent } from './components/filtro/filtro.component';


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
    PopuCarritoDetalleComponent,
    PopupLoginComponent,
    BackofficeComponent,
    CarritoComponent,
    ModalNavbarComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SloganComponent } from './slogan/slogan.component';
import { InicioComponent } from './inicio/inicio.component';
import { LocalesComponent } from './locales/locales.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';


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
    ProductoComponent
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

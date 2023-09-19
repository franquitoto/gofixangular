import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  numerito: number = 0;

  constructor( private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.numerito$.subscribe((numerito) => {
      this.numerito = numerito;
    });
    // Obtener el carrito inicial y configurar numerito
    const carritoInicial = JSON.parse(sessionStorage.getItem('carrito') || '[]');
    this.numerito = carritoInicial.length;
  }
  mostrarCarritoEmergente(){
    this.carritoService.mostrarCarritoEmergente()
  }
}
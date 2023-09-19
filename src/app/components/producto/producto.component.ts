import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  @Input() producto: any;

  constructor(private router: Router, private carritoService: CarritoService) {} // Inyecta el servicio Router

  // Funcion para que cuando hagan click en la img del producto nos redirija a la vista de detalle
  
  vistaDeDetalle(){
    this.router.navigate(['/detalle', this.producto._id]);
  }
  agregarAlCarrito(id: string){
    this.carritoService.agregarAlCarrito(id,1)
  }
}

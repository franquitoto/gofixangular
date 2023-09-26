import { Component } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  numerito: number = 0;
  precioFinal: number = 0
  productos: any = []
  constructor (public carritoService: CarritoService, private productosService: ProductosService){
    console.log(this.repeticiones.length, "hola")
    
  }
  repeticiones: any = this.carritoService.obtenerCarrito()
  ngOnInit() {
    this.carritoService.numerito$.subscribe((numerito) => {
      this.numerito = numerito;
    });
    this.carritoService.precio$.subscribe((precio) =>{
      this.precioFinal = precio
    })
    // Obtener el carrito inicial y configurar numerito
    const carritoInicial = JSON.parse(sessionStorage.getItem('carrito') || '[]');
    this.numerito = carritoInicial.length;
  }
  getDetalleProducto(id: string){
    return this.productosService.getProduct(id);
  }
}

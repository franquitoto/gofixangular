import { Component,OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-popup-carrito',
  templateUrl: './popup-carrito.component.html',
  styleUrls: ['./popup-carrito.component.scss']
})
export class PopupCarritoComponent {
  
  productos: any = []
  constructor (public carritoService: CarritoService, private productosService: ProductosService){
    console.log(this.repeticiones, "hola")
  }
  repeticiones: any = this.carritoService.obtenerCarrito()
  
  getDetalleProducto(id: string){
    return this.productosService.getProduct(id);
  }
  ocultarCarritoEmergente(){
    this.carritoService.ocultarCarritoEmergente()
  }
}

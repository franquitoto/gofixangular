import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-popu-carrito-detalle',
  templateUrl: './popu-carrito-detalle.component.html',
  styleUrls: ['../popup-carrito/popup-carrito.component.scss']
})
export class PopuCarritoDetalleComponent {
  @Input() detalle: any;
  producto:any = ''
  imagen : string = ''
  constructor(private productoService: ProductosService){

  }
  
  ngOnInit() : void {
    this.loadProductDetails();
  }
  // Creamos una funcion que se comunica con el servicio, que este a su vez se comunica con la api
  loadProductDetails() {
    this.productoService.getProduct(this.detalle.producto).subscribe((producto: any) => {
      this.producto = producto;
      this.imagen = producto.imagen.urlImg
    });
  }

}

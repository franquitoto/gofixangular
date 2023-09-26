import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos: Producto[] = []; // Aca almacenamos los productos
  constructor(private productosService: ProductosService){}

  ngOnInit() : void{
    this.productosService.getProductos().subscribe((data: any) => {
      console.log(data.Productos)
      if (Array.isArray(data.Productos)) {
        // Agregar la propiedad imagenUrl a cada producto
        this.productos = data.Productos.map((producto: any) => ({
          ...producto,
          imagenUrl: producto.imagen_url
        }));
        console.log(this.productos);
      } else {
        console.error("La propiedad 'productos' no es un array válido en los datos recibidos.");
      }
    });
  }

}

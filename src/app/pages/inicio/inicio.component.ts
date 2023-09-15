import { Component, OnInit } from '@angular/core';
// Importamos el servicio que trae la data de la api
import { ProductosService } from '../../servicios/productos.service';
import { Producto } from 'src/app/models/producto.models';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  productos: Producto[] = []; // Aca almacenamos los productos


  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data: any) => {
      if (Array.isArray(data.productos)) {
        // Agregar la propiedad imagenUrl a cada producto
        this.productos = data.productos.map((producto: any) => ({
          ...producto,
          imagenUrl: producto.imagen.urlImg
        }));
        console.log(this.productos);
      } else {
        console.error("La propiedad 'productos' no es un array válido en los datos recibidos.");
      }
    });
  }
}

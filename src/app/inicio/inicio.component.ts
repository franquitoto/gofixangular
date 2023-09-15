import { Component, OnInit } from '@angular/core';
// Importamos el servicio que trae la data de la api
import { ProductosService } from '../servicios/productos.service';
interface Producto {
  _id: string;
  nombre: string;
  categoria: string;
  precio: number;
  capacidad: string;
  color: string;
  descripcion: string;
  destacado:string;
  imagen:object;
  marca:string;
  modelo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  productos: Producto[] = []; // Aca almacenamos los productos

  
  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;
      console.log(data)
    });
  }
}

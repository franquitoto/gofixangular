import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // exportamos esta libreria para poder acceder a los parametros pasados
import { Producto } from 'src/app/models/producto.models';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductosService } from 'src/app/servicios/productos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  mostrar: boolean = false
  cantidad: number = 0;
  producto: Producto | undefined;
  imagen : string = ''
  productId: string = ''; // Declarar la propiedad
  precio: any = 0
  constructor(private route: ActivatedRoute, private productoService: ProductosService, private carritoService: CarritoService) { } // Inyectamos activatedRoute en el constructor
  ngOnInit() : void {
    // Accede al parámetro de la URL llamado 'id' (que corresponde al ID del producto)
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id') || ''; // 'id' debe coincidir con el nombre definido en las rutas
      // Ahora productId contiene el ID del producto que pasaste en la URL
      this.loadProductDetails();
    });
  }
  // Creamos una funcion que se comunica con el servicio, que este a su vez se comunica con la api
  loadProductDetails() {
    this.productoService.getProduct(this.productId).subscribe((producto: any) => {
      this.producto = producto;
      this.imagen = producto.imagen_url
      this.precio= producto.precio
    });
  }
  
  aumentarCantidad(event: Event, buttonId: string){
    if (buttonId === 'menos') {
      // Disminuir la cantidad si es mayor que 0
      if (this.cantidad > 0) {
        this.cantidad--;
      }
    } else if (buttonId === 'mas') {
      // Aumentar la cantidad
      this.cantidad++;
    }
  }
  agregarAlCarrito(){
    if(this.cantidad < 1){
      this.mostrar = true
    }else{
      this.mostrar = false
      this.carritoService.agregarAlCarrito(this.productId, this.cantidad, this.precio)
      this.cantidad = 0
    }
    
  }
}



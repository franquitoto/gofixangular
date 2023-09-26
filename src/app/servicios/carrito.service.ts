import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  // Variable para manejar la ventana emergente del carrito
  public mostrarCarrito: boolean = false;
  private carrito: any[] = [];
  private numeritoSource = new BehaviorSubject<number>(0);
  numerito$ = this.numeritoSource.asObservable();
  private precioSource = new BehaviorSubject<number>(0);
  precio$ = this.precioSource.asObservable();

  constructor() {
    // Obtener el carrito del sessionStorage si existe
    const carritoEnStorage = sessionStorage.getItem('carrito');
    if (carritoEnStorage) {
      this.carrito = JSON.parse(carritoEnStorage);
    }
    this.actualizarPrecioFinal(); // Calcular el precio inicial
  }

  agregarAlCarrito(producto: string, cantidad: number, precio: any) {
    let opcion = false;
    let index = 0;
    this.carrito.forEach((e, i) => {
      if (e.producto === producto) {
        opcion = true;
        index = i;
      }
    });

    if (opcion) {
      this.carrito[index].cantidad += cantidad;
      this.carrito[index].precio += precio;
    } else {
      let agregar = { producto, cantidad, precio };
      this.carrito.push(agregar);
    }

    this.guardarCarritoEnStorage();
    this.numeritoSource.next(this.carrito.length);
    this.mostrarCarrito = true;
    setTimeout(() => {
      this.mostrarCarrito = false;
    }, 5000);
    this.actualizarPrecioFinal(); // Actualizar precio final
  }

  obtenerCarrito() {
    return this.carrito;
  }

  private guardarCarritoEnStorage() {
    sessionStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  mostrarCarritoEmergente() {
    this.mostrarCarrito = true;
    setTimeout(() => {
      this.mostrarCarrito = false;
    }, 10000);
  }

  ocultarCarritoEmergente() {
    this.mostrarCarrito = false;
  }

  quitarProductoDelCarrito(id: string) {
    // Encuentra el índice del producto con el ID especificado en el carrito
    const index = this.carrito.findIndex((item) => item.producto === id);

    // Verifica si se encontró el producto
    if (index !== -1) {
      // Elimina el producto del carrito utilizando splice
      this.carrito.splice(index, 1);
      this.guardarCarritoEnStorage();
      this.numeritoSource.next(this.carrito.length);

      setTimeout(() => {
        this.mostrarCarrito = false;
      }, 5000);
      this.actualizarPrecioFinal(); // Actualizar precio final
    } else {
      console.log('El producto no se encontró en el carrito');
    }
  }

  actualizarPrecioFinal() {
    let precioFinal = 0;
    this.carrito.forEach((e) => {
      precioFinal += e.precio;
    });
    this.precioSource.next(precioFinal);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];
  private numeritoSource = new BehaviorSubject<number>(0);
  numerito$ = this.numeritoSource.asObservable();
  constructor() {
    // Obtener el carrito del sessionStorage si existe
    const carritoEnStorage = sessionStorage.getItem('carrito');
    if (carritoEnStorage) {
      this.carrito = JSON.parse(carritoEnStorage);
    }
  }
  agregarAlCarrito(producto: string, cantidad: number) {
    let opcion = false
    let index = 0
    this.carrito.forEach((e, i) => {
      if(e.producto === producto){
        opcion = true
        index = i
      }
    });
    if(opcion){
      this.carrito[index].cantidad += cantidad
    }else{
      let agregar = {producto,cantidad}
      this.carrito.push(agregar);
    }
    this.guardarCarritoEnStorage();
    this.numeritoSource.next(this.carrito.length);
  }
  obtenerCarrito() {
    return this.carrito;
  }
  private guardarCarritoEnStorage() {
    sessionStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  private productosFiltradosSubject = new BehaviorSubject<any[]>([]);
  productosFiltrados$: Observable<any[]> = this.productosFiltradosSubject.asObservable();
  constructor() { }

  setProductosFiltrados(productos: any) {
    this.productosFiltradosSubject.next(productos);
  }
}

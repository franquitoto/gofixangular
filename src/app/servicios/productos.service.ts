import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/api/productos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  getProduct(id: string): Observable<Producto> {
    const productUrl = `${this.apiUrl}/${id}`;
    return this.http.get<Producto>(productUrl);
  }
  agregarProducto(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
  
  
  
}

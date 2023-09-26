import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Producto {
  id: string;
  imagen_url: string;
  imagen_nombre: string;
  imagen_path: string;
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;
  modelo: string;
  capacidad: string;
  marca: string;
  color: string;
  destacado: 'SI' | 'NO';
  created_at: string; // Esto debe ser un string en formato de fecha y hora, por ejemplo: '2023-09-24 12:34:56'
  updated_at: string; // Esto debe ser un string en formato de fecha y hora, por ejemplo: '2023-09-24 12:34:56'
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
